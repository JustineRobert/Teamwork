const express = require('express');
const jwt = require('jsonwebtoken');


const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to my API'
  });
});

app.post('/api/posts', verifyToken, (req, res) =>{
  jwt.verify(req.token, 'secretkey', (err, authData) =>{
    if(err) {
      res.sendStatus(403);
    }else{
      res.json({
      message: 'Post Created Successfully',
      authData
  });
  }
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

  jwt.sign({user}, 'secretkey', {expiresIn: '50s'}, (err, token) =>{
    res.json({
      token
    });
  });
}); 

//TOKEN FORMAT
//Authorization: Bearer <access_token>


//Verify Token
function verifyToken(req, res, next) {
  //get auth header value
  const bearerHeader = req.headers['authorization'];
  //Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    //Split at the space
    const bearer = bearerHeader.split(' ');
    //Get token from Array
    const bearerToken = bearer[1];
    //Set the token 
    res.token = bearerToken;
    //Call next middleware
    next();
  }else {
    //Forbidden
    res.sendStatus(403);
  }
}


app.listen(5000, ()=>console.log('Server is successfully running on port 5000'));