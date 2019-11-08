import { CreateEmployeesTable, CreateArticlesTable, CreateCategoriesTable } from './migrations';
import CreateCommentsTable from './migrations/create_comments_table';

const InitDB = async () => {
  await CreateEmployeesTable.run();
  await CreateArticlesTable.run();
  await CreateCommentsTable.run();
  await CreateCategoriesTable.run();
};

module.exports = InitDB;

require('make-runnable');
