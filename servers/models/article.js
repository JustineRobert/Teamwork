import moment from 'moment';
import Database from '../database/database';

class Article extends Database {
  constructor() {
    super('articles');
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

export default Article;