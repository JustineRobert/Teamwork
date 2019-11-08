import express from 'express';
import UserController from '../controllers/UserController';
import validation from '../middlewares/SchemaValidator';

const auth = new express.Router();
auth.use(validation);
auth.route('/auth/signup/').post(UserController.signUp);
auth.route('/auth/signin/').post(UserController.signIn);

export default auth;