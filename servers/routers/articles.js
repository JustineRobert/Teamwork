import express from 'express';
import Auth from '../middlewares/auth';
import ArticlesController from '../controllers/ArticlesController';
import validation from '../middlewares/SchemaValidator';
import auth from './auth';

const articles = new express.Router();
// Articles APIs
articles.use(Auth.verifyToken);
articles.use(validation);
articles.route('/feeds').get(ArticlesController.findAll);
articles.route('/articles').post(ArticlesController.store);
articles.route('/articles/:articleId').get(ArticlesController.findOne);
articles.route('/articles/:articleId').delete(ArticlesController.destroy);
articles.route('/articles/:articleId/comments').post(ArticlesController.addComment);
articles.route('/articles/:articleId').patch(ArticlesController.update);
articles.route('/feeds/:tagId/tags').get(ArticlesController.findByCategory);
articles.route('/author/articles/:authorId').get(ArticlesController.findByAuthor);
export default articles;