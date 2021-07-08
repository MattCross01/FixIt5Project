const Job = require('./Job');
const Customer = require('./Customer');
const Employee = require('./Employee');

Employee.hasMany(Job, {
  foreignKey: 'pokemon_id'
});

Customer.hasMany(Roster, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { Job, Customer, Employee };