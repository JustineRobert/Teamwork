const Sequelize = require('sequelize');
// Establish connection to the Database
module.exports = new Sequelize('teamworkdb', 'postgres', 'Justine@881234', {
  host: 'localhost',
  dialect:'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
