import Database from '../database/database';

class User extends Database {
  constructor() {
    super('employees');
  }

  async getByEmail(email) {
    return await this.first('email', '=', email);
  }
}

export default User;