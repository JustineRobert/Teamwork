import Database from '../database';
import { User } from '../../models';
import users from '../../mock/user';
import Helpers from '../../helpers/Helpers';

const database = new Database();
const dummy = { ...users[0] };
class CreateEmployeesTable {
  static up() {
    return 'CREATE TABLE IF NOT EXISTS employees('
      + 'id SERIAL PRIMARY KEY,'
      + 'firstName VARCHAR (60) NOT NULL,'
      + 'lastName VARCHAR (60) NOT NULL,'
      + 'email VARCHAR (60) NOT NULL,'
      + 'password VARCHAR (255) NOT NULL,'
      + 'gender VARCHAR (60) NOT NULL,'
      + 'jobRole VARCHAR (60) NOT NULL,'
      + 'department VARCHAR (60) NOT NULL,'
      + 'address VARCHAR (60) NOT NULL'
      + ');';
  }

  static down() {
    return 'DROP TABLE IF EXISTS employees;';
  }

  static async seeds() {
    const employee = new User();
    const employeeMock = { ...dummy };
    if (employeeMock) {
      employeeMock.password = Helpers.hashPassword(dummy.textPassword);
      delete employeeMock.id;
      delete employeeMock.textPassword;
      return await employee.create(employeeMock);
    }
  }

  static async run() {
    await database.queryBuilder(CreateEmployeesTable.down());
    await database.queryBuilder(CreateEmployeesTable.up());
    await CreateEmployeesTable.seeds();
  }
}

export default CreateEmployeesTable;