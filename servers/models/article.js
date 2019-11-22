const moment = require('moment';)
const Database = require('../database/database');

class Article, Gif extends Database {
  constructor() {
    super('articles');
    super('gifs');
  }

  async getById(id) {
    return await this.first('id', '=', id);
  }

  async getByAuthor(id) {
    return await this.where('authorId', '=', id);
  }

  async all(orderBy = 'createdOn DESC') {
    return super.all(orderBy);
  }
}

module.exports = Article, Gif;