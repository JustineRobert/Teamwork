import Database from '../database';
import { Article } from '../../models';
import Helpers from '../../helpers/Helpers';
import { articles } from '../../mock';

const database = new Database();
const dummy = { ...articles[0] };
class CreateArticlesTable {
  static up() {
    return 'CREATE TABLE IF NOT EXISTS articles('
      + 'id SERIAL PRIMARY KEY,'
      + 'title VARCHAR (255) NOT NULL,'
      + 'image VARCHAR (255) NULL,'
      + 'article TEXT NOT NULL,'
      + 'authorId INT NOT NULL CHECK (authorId >= 0),'
      + 'category_id INT NULL CHECK (category_id >= 0),'
      + 'createdOn timestamp NOT NULL,'
      + 'updatedOn timestamp NULL'
      + ');';
  }

  static down() {
    return 'DROP TABLE IF EXISTS articles;';
  }

  static async seeds() {
    const article = new Article();
    const articleMock = { ...dummy };
    if (articleMock) {
      delete articleMock.id;
      delete articleMock.comments;
      delete articleMock.tags;
      return await article.create(articleMock);
    }
  }

  static async run() {
    await database.queryBuilder(CreateArticlesTable.down());
    await database.queryBuilder(CreateArticlesTable.up());
    if (process.env.NODE_ENV === 'test') {
      await CreateArticlesTable.seeds();
    }
  }
}

export default CreateArticlesTable;