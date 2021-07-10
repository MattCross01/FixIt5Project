const Job = require('./Job');
const Customer = require('./Customer');
const Employee = require('./Employee');

Employee.hasMany(Job, {
  foreignKey: ''
});

Customer.hasMany(Job, {
  foreignKey: '',
  onDelete: 'CASCADE'
});

module.exports = { Job, Customer, Employee };