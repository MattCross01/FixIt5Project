
const path = require('path');
const router = require('express').Router();
const { Customer, Employee, Job } = require('../../models');
const withAuth = require('../../utils/auth');


const paths = (app) => {
    app.get('/customer', (req,res) => {
        res.sendfile(path.join(__dirname, '../public/customer.html'));
    });

    app.get('/employee', (req,res) => {
        res.sendfile(path.join(__dirname, '../public/employee.html'));
    });

    app.get('*', (req,res) => {
        res.sendfile(path.join(__dirname, '../public/index.html'));
    });
}


router.get('/', async (req, res) => {
    try{
        const jobData = await Job.findAll({
        });

        const jobs = jobData.map((job) => job.get({ plain: true }));
        console.log();

        res.render('homepage', {
            jobs,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
});

// withAuth
router.get('/profile', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Roster }],
        });
        console.log(userData);
        const user = userData.get({ plain: true });
        console.log(user);
        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
