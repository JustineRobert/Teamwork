const express = require('express');
const articles = require('./articles');
const auth = require('./auth');

const routers = new express.Router();

routers.route('/').get((request, response) => response.status(400).send({
  status: response.statusCode,
  message: 'Unfavorable Request Error',
}));

routers.use(auth);
routers.use(articles);

module.exports = routers;