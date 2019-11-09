import Joi from '@hapi/joi';

const article = {
  title: Joi.string()
    .trim()
    .required(),
  image: Joi.string().uri(),
  article: Joi.string()
    .required(),
};

const paramsArticleId = {
  articleId: Joi.number()
    .required()
    .greater(0)
    .integer(),
};

const storeSchema = Joi.object()
  .keys(article);

const paramSchema = Joi.object()
  .keys({
    params: paramsArticleId,
  });
const commentSchema = Joi.object()
  .keys({
    comment: Joi.string()
      .trim()
      .required(),
  });
const articleSchema = {
  patch: {
    '/articles/:articleId/': storeSchema,
  },
  '/articles/': storeSchema,
  '/articles/:articleId/': paramSchema,
  '/articles/:articleId/comments/': commentSchema,
};

export default articleSchema;