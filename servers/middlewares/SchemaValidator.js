import _ from 'lodash';
import Joi from '@hapi/joi';
import Schemas from '../validations';
import Helpers from '../helpers/Helpers';

const getSchema = (route, method) => {
  const { userSchemas, articleSchema } = Schemas;
  const schemas = {
    auth: userSchemas,
    articles: articleSchema,
  };
  const routePrefix = _.words(route)[0];
  let schema = _.get(schemas, routePrefix);
  if (_.includes(['patch'], method)) {
    schema = schema.patch;
  }
  return schema;
};

const validation = (request, response, next) => {
  const allowedRequestMethod = ['post', 'patch', 'delete', 'get'];
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };
  let route = request.url;
  if (route.substr(-1) !== '/') route += '/';
  const method = request.method.toLowerCase();
  if (route.includes('articles')) route = route.replace(new RegExp('\\d+', 'g'), ':articleId');
  const schemaObj = getSchema(route, method);
  if (_.includes(allowedRequestMethod, method) && _.has(schemaObj, route)) {
    const schema = _.get(schemaObj, route);
    const validating = Helpers.validationResponse(Joi.validate(request.body, schema, options), response);
    if (validating) return validating;
  }
  next();
};

export default validation;
