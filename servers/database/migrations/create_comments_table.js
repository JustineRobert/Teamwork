import Database from '../database';
import { Article } from '../../models';
import Helpers from '../../helpers/Helpers';
import { articles } from '../../mock';

const database = new Database();


class CreateCommentsTable {
  static up() {
    return 'CREATE TABLE IF NOT EXISTS comments('
      + 'id SERIAL PRIMARY KEY,'
      + 'comment TEXT NOT NULL,'
      + 'article_id INT NOT NULL,'
      + 'employee_id INT NOT NULL,'
      + 'createdOn timestamp NOT NULL'
      + ');';
  }

  static down() {
    return 'DROP TABLE IF EXISTS comments;';
  }

  static async run() {
    await database.queryBuilder(CreateCommentsTable.down());
    await database.queryBuilder(CreateCommentsTable.up());
  }
}

export default CreateCommentsTable;