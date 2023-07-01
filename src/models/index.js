'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const Collection = require('./data-collection.js');
const userModel = require('../auth/models/users.js');
const bookModel = require('./book/model.js');

const DATABASE_URL =process.env.NODE_ENV==="test"?"sqlite::memory:": process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL,{});
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const books = bookModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
  books: new Collection(books),
  users: userModel(sequelize, DataTypes),

};
