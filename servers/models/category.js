const Database =  require('../database/database');
const Article = require('./article');

class Category extends Database {
  constructor(id = undefined) {
    super('categories');
    this.id = id;
  }

  async articles() {
    if (this.id !== undefined) {
      const article = new Article();
      return await article.where('category_id', '=', this.id);
    }
  }
}

module.exports = Category;