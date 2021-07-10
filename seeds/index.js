const sequelize = require('../config/connection');

const seedEmployee = require('./employee-seeds');
const seedJob = require('./job-seeds');
const seedCustomer = require('./customer-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCustomer();
  console.log('\n----- CUSTOMERS SEEDED -----\n');

  await seedEmployee();
  console.log('\n----- EMPLOYEES SEEDED -----\n');
  
  await seedJob();
  console.log('\n----- JOBS SEEDED -----\n');

  process.exit(0);
};

seedAll();