import Database from '../database';
import { Gif } from '../../models';
import Helpers from '../../helpers/Helpers';
import { gifs } from '../../mock';

const database = new Database();
const dummy = { ...articles[0] };
class CreateArticlesTable {
  static up() {
    return 'CREATE TABLE IF NOT EXISTS gifs('
      + 'id SERIAL PRIMARY KEY,'
      + 'title VARCHAR (255) NOT NULL,'
      + 'image VARCHAR (255) NULL,'
      + 'gif TEXT NOT NULL,'
      + 'authorId INT NOT NULL CHECK (authorId >= 0),'
      + 'category_id INT NULL CHECK (category_id >= 0),'
      + 'createdOn timestamp NOT NULL,'
      + 'updatedOn timestamp NULL'
      + ');';
  }

  static down() {
    return 'DROP TABLE IF EXISTS gifs;';
  }

  static async seeds() {
    const gif = new Gif();
    const gif = { ...dummy };
    if (gifMock) {
      delete gifMock.id;
      delete gifMock.comments;
      delete gifMock.tags;
      return await gif.create(gifMock);
    }
  }

  static async run() {
    await database.queryBuilder(CreateGifsTable.down());
    await database.queryBuilder(CreateGifsTable.up());
    if (process.env.NODE_ENV === 'test') {
      await CreateGifsTable.seeds();
    }
  }
}

export default CreateGifsTable;