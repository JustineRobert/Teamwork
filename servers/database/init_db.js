const { CreateEmployeesTable, CreateArticlesTable, CreateCategoriesTable } = require('./migrations');
const CreateCommentsTable = require('./migrations/create_comments_table');
const cloudinary = require('cloudinary').v2;

const InitDB = async () => {
  await CreateEmployeesTable.run();
  await CreateArticlesTable.run();
  await CreateCommentsTable.run();
  await CreateCategoriesTable.run();
};

module.exports = InitDB;

require('make-runnable');
