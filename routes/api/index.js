const router = require('express').Router();

const customerRoutes = require('../../controllers/api/customerRoutes');
const employeeRoutes = require('../../controllers/api/employeeRoutes');
const jobRoutes = require('../../controllers/api/jobRoutes')

router.use('/customers', customerRoutes);
router.use('/employees', employeeRoutes);
router.use('/jobs', jobRoutes);

module.exports = router;
