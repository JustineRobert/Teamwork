const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User');

//Get user list
router.get('/', (req, res) => 
  User.findAll()
  .then(users => {
    console.log(users);
    
    res.sendStatus(200);
    /*
    res.render('users', {
      users
    }); */
  })
  .catch(err => console.log('err')));

  /*
//Add a user
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
  User.create({
    firstName,
    lastName,
    email,
    password,
    gender,
    jobRole,
    department,
    address
  })
   .then(user => res.redirect('/users'))
   .catch(err => console.log(err));
});  */

module.exports = router;