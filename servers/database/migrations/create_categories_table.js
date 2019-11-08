import Database from '../database';
import { categories } from '../../mock';
import { Category } from '../../models';

const database = new Database();
const category = new Category();
class CreateCategoriesTable {
  static up() {
    return 'CREATE TABLE IF NOT EXISTS categories('
      + 'id SERIAL PRIMARY KEY,'
      + 'category TEXT NOT NULL'
      + ');';
  }

  static down() {
    return 'DROP TABLE IF EXISTS categories;';
  }

  static async seeds() {
    const prepare = categories.map((cat, i) => `($${i + 1})`).join(',');
    const sql = `INSERT INTO categories(category) VALUES ${prepare}`;
    return await category.queryBuilder(sql, categories);
  }

  static async run() {
    await database.queryBuilder(CreateCategoriesTable.down());
    await database.queryBuilder(CreateCategoriesTable.up());
    await CreateCategoriesTable.seeds();
  }
}

export default CreateCategoriesTable;