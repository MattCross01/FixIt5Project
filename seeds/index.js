const sequelize = require('../config/connection');

const seedEmployee = require('./employee-seeds');
const seedJob = require('./job-seeds');
//const { User , Pokemon } = require('')
const seedCustomer = require('./customer-seeds');

const pokemonData = require('./pokemonSeedData.json');
const seedRoster = require('./roster-seeds');
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedPokemon();
  console.log('\n----- CUSTOMERS SEEDED -----\n');

  await seedUser();
  console.log('\n----- EMPLOYEES SEEDED -----\n');
  
  await seedRoster();
  console.log('\n----- JOBS SEEDED -----\n');

  process.exit(0);
};

seedAll();