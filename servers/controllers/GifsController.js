const moment = require('moment');
const Helpers = require('../helpers/Helpers');
const { Gif, Category, Comment } = require('../models');
const { gifs } = require('../mock');

const Model = new Gif();

class GifsController {
  static async store(request, response) {
    const { user } = request;
    const data = {
      ...request.body,
      authorId: user.id,
      createdOn: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    const store = await Model.create(data);
    if (store.errors) Helpers.dbError(response, store);
    return Helpers.sendResponse(response, 201, 'Gif successfully created', data);
  }

  static async findAll(request, response) {
    const _gifs = await Model.all();
    if (_gifs.errors) Helpers.dbError(response, _gifs);
    return Helpers.sendResponse(response, 200, 'Success', _gifs.rows);
  }

  static async update(request, response) {
    const { gifId } = request.params;
    const { user } = request;
    const data = {
      ...request.body,
      updatedOn: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    const update = await Model.update(data, {
      authorId: user.id,
      id: gifId,
    });
    if (update.errors) return Helpers.dbError(response, update);
    if (update.count > 0) {
      return Helpers.sendResponse(response, 200, 'Gif successfully edited', data);
    }
    return Helpers.sendResponse(response, 404, 'Gif not found!');
  }

  static async destroy(request, response) {
    const { gifId } = request.params;
    const { user } = request;
    const destroy = await Model.delete({
      authorId: user.id,
      id: gifId,
    });
    if (destroy.errors) return Helpers.dbError(response, destroy);
    if (destroy.count > 0) {
      return Helpers.sendResponse(response, 204, 'Gif successfully deleted');
    }
    return Helpers.sendResponse(response, 404, 'Gif Not Found!');
  }

  static async findOne(request, response) {
    const { gifId } = request.params;
    const result = await Model.getById(gifId);
    if (result.errors) return Helpers.dbError(response, result);
    if (result.count > 0) {
      return Helpers.sendResponse(response, 200, 'Gif found!', result.row);
    }
    return Helpers.sendResponse(response, 404, 'Gif not found!');
  }

  static async findByCategory(request, response) {
    const { tagId } = request.params;
    const categoryModel = new Category(tagId);
    const results = await categoryModel.gifs();
    if (results.errors) return Helpers.dbError(response, results);
    if (results.count < 1) return Helpers.sendResponse(response, 404, 'No gifs found!');
    return Helpers.sendResponse(response, 200, 'Success', results.rows);
  }

  static async addComment(request, response) {
    const commentModel = new Comment();
    const { user } = request;
    const { comment } = request.body;
    const { gifId } = request.params;
    const data = {
      comment,
      gif_id: parseInt(gifId),
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
      return Helpers.sendResponse(response, 404, 'No gifs found!', []);
    }
    return Helpers.sendResponse(response, 200, 'Success', results.rows);
  }
}

export default GifsController;