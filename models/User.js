const sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
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

module.exports = User;