const express = require('express');
const UserController = require('../controllers/UserController');
const validation = require('../middlewares/SchemaValidator');

const auth = new express.Router();
auth.use(validation);
auth.route('/auth/signup/').post(UserController.signUp);
auth.route('/auth/signin/').post(UserController.signIn);

module.exports = auth;