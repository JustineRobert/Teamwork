const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Team = require('../models/Team');

//Get team list
router.get('/', (req, res) => 
  Team.findAll()
  .then(teams => {
    console.log(teams);
    res.sendStatus(200);
  })
  .catch(err => console.log('err')));

  //Add a team
module.exports = router;