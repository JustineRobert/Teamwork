import Joi from '@hapi/joi';

const signupSchema = Joi.object()
  .keys({
    firstName: Joi.string()
      .min(3)
      .trim()
      .required(),
    lastName: Joi.string()
      .min(3)
      .trim()
      .required(),
    email: Joi.string()
      .email()
      .trim()
      .required(),
    password: Joi.string()
      .min(6)
      .required(),
    gender: Joi.string()
      .valid(['male', 'female'])
      .required(),
    jobRole: Joi.string()
      .min(3)
      .trim()
      .required(),
    department: Joi.string()
      .min(3)
      .trim()
      .required(),
    address: Joi.string()
      .min(3)
      .trim()
      .required(),
  });

const signinSchema = Joi.object()
  .keys({
    email: Joi.string().trim()
      .email()
      .required(),
    password: Joi.string()
      .required(),
  });
const userSchemas = {
  '/auth/signin/': signinSchema,
  '/auth/signup/': signupSchema,
};

export default userSchemas;