import Joi from '@hapi/joi';

const gifs = {
  title: Joi.string()
    .trim()
    .required(),
  image: Joi.string().uri(),
  gif: Joi.string()
    .required(),
};

const paramsGifId = {
  gifId: Joi.number()
    .required()
    .greater(0)
    .integer(),
};

const storeSchema = Joi.object()
  .keys(gif);

const paramSchema = Joi.object()
  .keys({
    params: paramsGifId,
  });
const commentSchema = Joi.object()
  .keys({
    comment: Joi.string()
      .trim()
      .required(),
  });
const gifSchema = {
  patch: {
    '/gifs/:gifId/': storeSchema,
  },
  '/gifs/': storeSchema,
  '/gifs/:gifsId/': paramSchema,
  '/gifs/:gifsId/comments/': commentSchema,
};

export default gifSchema;