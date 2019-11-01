const sequelize = require('sequelize');
const db = require('../config/database');

const Team = db.define('team', {
  firstName: {
    type: sequelize.STRING
  },

  lastName: {
    type: sequelize.STRING
  },
  email: {
    type: sequelize.STRING
  },
  password: {
    type: sequelize.STRING
  },
  gender: {
    type: sequelize.STRING
  },
  jobRole: {
    type: sequelize.STRING
  },
  department: {
    type: sequelize.STRING
  },
  address: {
    type: sequelize.STRING
  }

})

module.exports = Team;