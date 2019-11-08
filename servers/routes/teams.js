const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Team = require('../../models/Team');

//Get team list
router.get('/', (req, res) => 
  Team.findAll()
  .then(teams => {
    /*console.log(teams); */
    res.render('teams', {
      teams
    });
  })
  .catch(err => console.log('err')));

//Add a team
router.get('/add', (req, res) =>{
  const data = {
    firstName: 'Justine',
    lastName: 'Robert',
    email: 'justine@teamwork.com',
    password: 'Just1234@2019',
    gender: 'Male',
    jobRole: 'Admin',
    department: 'Computer Science & Information Technology',
    address: 'Kampala, Uganda'

  }

  let {firstName, lastName, email, password, gender, jobRole, department, address} = data;
  //Insert into table
  Team.create({
    firstName,
    lastName,
    email,
    password,
    gender,
    jobRole,
    department,
    address
  })
   .then(team => res.redirect('/teams'))
   .catch(err => console.log(err));
});

module.exports = router;