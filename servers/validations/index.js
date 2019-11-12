const userSchemas = require('./auth');
const articleSchema = require('./article');

const validationSchemas = {
  userSchemas, articleSchema,
};

module.exports = validationSchemas;