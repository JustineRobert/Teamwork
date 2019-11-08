import Database from '../database/database';

class Comment extends Database {
  constructor() {
    super('comments');
  }
}

export default Comment;