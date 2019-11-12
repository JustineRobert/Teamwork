const Database = require('../database/database');

class Comment extends Database {
  constructor() {
    super('comments');
  }
}

module.exports = Comment;