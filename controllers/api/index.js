const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const employeeRoutes = require('./employeeRoutes')
const jobRoutes = require('./jobRoutes')

router.use('/users', userRoutes);

module.exports = router;