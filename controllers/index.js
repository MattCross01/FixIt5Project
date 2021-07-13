const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const customerRoutes = require('./customerRoutes');
const employeeRoutes = require('./employeeRoutes');
const jobRoutes = require('./customerRoutes');

router.use('/customer', customerRoutes);
router.use('/employee', employeeRoutes);
router.use('/job', jobRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);


module.exports = router;