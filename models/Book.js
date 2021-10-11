const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  genre: String,
  author: String,
  read: Boolean
});

module.exports = mongoose.model('Book', BookSchema, 'books');