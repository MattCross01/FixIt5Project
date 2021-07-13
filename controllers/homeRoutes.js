
const router = require('express').Router();
const { Customer, Employee, Job } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{
        const jobData = await Job.findAll({
        });

        const jobs = jobData.map((job) => job.get({ plain: true }));
        console.log(pokemons);

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
>>>>>>> 5b6d7a7c8b41ddef77859e978ec1545d2c6aac51
