const express = require('express');

const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook
} = require('../controllers/books');

// mount above methods to router
const router = express.Router();

router.route('/')
  .get(getBooks)
  .post(createBook);

router.route('/:id')
  .get(getBook)
  .put(updateBook)
  .delete(deleteBook);

// export router
module.exports = router; 