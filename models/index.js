<<<<<<< HEAD
module.exports = {
    GoogleBooks: require("./book")
};
=======
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
>>>>>>> 596ef9fc36c22ccbb95e6d070d724d0ead87b616
