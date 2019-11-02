const express = require('express');
const jwt = require('jsonwebtoken');


const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to my API'
  });
});

app.post('/api/posts', (req, res) =>{
  res.json({
    message: 'Post Created Successfully'
  });
});

app.post('/api/login', (req, res) => {
  //Mock user
  const user{
    firstName: 'Justine',
    lastName: 'Robert',
    email: 'justine@teamwork.com',
    password: 'Just1234@2019',
    gender: 'Male',
    jobRole: 'Admin',
    department: 'Software Engineer',
    address: 'Kampala, Uganda'
  }
  jwt.sign({user:user}, 'secretkey', (err, token) =>{
    res.json({
      token
    });
  });
});
app.listen(5000, ()=>console.log('Server is running on port 5000'));