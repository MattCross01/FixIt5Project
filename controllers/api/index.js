const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const employeeRoutes = require('./employeeRoutes')

router.use('/users', userRoutes);

module.exports = router;