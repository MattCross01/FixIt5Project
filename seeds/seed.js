const sequelize = require('../config/connection');
const { Employee, Customer, Job } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
}


seedDatabase();