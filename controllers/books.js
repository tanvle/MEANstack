const Book = require('../models/Book');

/*  exports.methodCRUD = async (req, res, next) => {
      function ...
      try {}
      catch {}
    };
*/

//  GET

// @desc  Get all books
// @route GET /books
// @access  public
exports.getBooks = async (req, res, next) => {
  let qry;
    console.log(`Query format: "?fieldName[operator]=value"`);
  let qryStr = JSON.stringify(req.query);
  qryStr = qryStr.replace(/\b(gt|gte|lt|lte|eq|neq|in)\b/gi, match => `$${match}`);  
  qry = Book.find(JSON.parse(qryStr));

  try {
    const books = await qry;
    res.status(200).json({ count: books.length, data: books});
  }
  catch (err) {
    res.status(400).json(err);
  }
};

// @desc  Get single book
// @route GET /books/:id
// @access  public
exports.getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {return res.status(400).json({success: false});
    }
    res.status(200).json({data: book});
  }
  catch (err) {
    res.status(400).json(err);
  }
};

// @desc  create book
// @route POST /books
// @access  private
exports.createBook = async (req, res, next) => {
  const book = await Book.create(req.body);
  res.status(201).json({ success: true, data: book});
};

// @desc  update book
// @route PUT /books/:id
// @access  private
exports.updateBook = async (req, res, next) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!book) {return res.status(400).json({success: false});
  }
  res.status(200).json({success: true, data: book});
};

// @desc  Delete book
// @route DELETE /books/:id
// @access  public
exports.deleteBook = async (req, res, next) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) {return res.status(400).json({success: false});
  }
  res.status(200).json({success: true, data: book});
};