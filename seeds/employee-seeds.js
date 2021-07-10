const { Employee } = require('../models');

const employeeData = [

]

const seedEmployee = () => Roster.bulkCreate(employeeData);

module.exports = seedEmployee;