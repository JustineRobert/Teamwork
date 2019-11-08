import moment from 'moment';
import Helpers from '../helpers/Helpers';
import { Article, Category, Comment } from '../models';
import { articles } from '../mock';

const Model = new Article();

class ArticlesController {
  static async store(request, response) {
    const { user } = request;
    const data = {
      ...request.body,
      authorId: user.id,
      createdOn: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    const store = await Model.create(data);
    if (store.errors) Helpers.dbError(response, store);
    return Helpers.sendResponse(response, 201, 'Article successfully created', data);
  }

  static async findAll(request, response) {
    const _articles = await Model.all();
    if (_articles.errors) Helpers.dbError(response, _articles);
    return Helpers.sendResponse(response, 200, 'Success', _articles.rows);
  }

  static async update(request, response) {
    const { articleId } = request.params;
    const { user } = request;
    const data = {
      ...request.body,
      updatedOn: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    const update = await Model.update(data, {
      authorId: user.id,
      id: articleId,
    });
    if (update.errors) return Helpers.dbError(response, update);
    if (update.count > 0) {
      return Helpers.sendResponse(response, 200, 'Article successfully edited', data);
    }
    return Helpers.sendResponse(response, 404, 'Article no found !');
  }

  static async destroy(request, response) {
    const { articleId } = request.params;
    const { user } = request;
    const destroy = await Model.delete({
      authorId: user.id,
      id: articleId,
    });
    if (destroy.errors) return Helpers.dbError(response, destroy);
    if (destroy.count > 0) {
      return Helpers.sendResponse(response, 204, 'Article successfully deleted');
    }
    return Helpers.sendResponse(response, 404, 'Article Not Found !!');
  }

  static async findOne(request, response) {
    const { articleId } = request.params;
    const result = await Model.getById(articleId);
    if (result.errors) return Helpers.dbError(response, result);
    if (result.count > 0) {
      return Helpers.sendResponse(response, 200, 'Article found !', result.row);
    }
    return Helpers.sendResponse(response, 404, 'Article not found !');
  }

  static async findByCategory(request, response) {
    const { tagId } = request.params;
    const categoryModel = new Category(tagId);
    const results = await categoryModel.articles();
    if (results.errors) return Helpers.dbError(response, results);
    if (results.count < 1) return Helpers.sendResponse(response, 404, 'No articles found !');
    return Helpers.sendResponse(response, 200, 'Success', results.rows);
  }

  static async addComment(request, response) {
    const commentModel = new Comment();
    const { user } = request;
    const { comment } = request.body;
    const { articleId } = request.params;
    const data = {
      comment,
      article_id: parseInt(articleId),
      employee_id: user.id,
      createdOn: moment()
        .format('YYYY-MM-DD HH:mm:ss'),
    };
    const save = await commentModel.create(data);
    if (save.errors) Helpers.dbError(response, save);
    return Helpers.sendResponse(response, 201, 'Comment successfully added.', data);
  }

  static async findByAuthor(request, response) {
    const { authorId } = request.params;
    const results = await Model.getByAuthor(authorId);
    if (results.errors) return Helpers.dbError(response, results);
    if (results.count <= 0) {
      return Helpers.sendResponse(response, 404, 'No articles found !', []);
    }
    return Helpers.sendResponse(response, 200, 'Success', results.rows);
  }
}

export default ArticlesController;