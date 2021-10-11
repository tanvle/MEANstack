const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const colors = require('colors');
const morgan = require('morgan');

// start connection to mongoDb
const connectDB = require('./config/db');
connectDB();

// mounting routing files

  // applicants
  const applicantsRouter = require('./routes/applicants');
  app.use('/api/v1/applicants', applicantsRouter);

  // books
  const booksRouter = require('./routes/books');
  app.use('/api/v1/books', booksRouter);

  // employees
  const employeesRouter = require('./routes/employees');
  app.use('/api/v1/employees', employeesRouter);

  // recruiters
  const  recruitersRouter = require('./routes/recruiters');
  app.use('/api/v1/recruiters', recruitersRouter);

// use morgan to log requests
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// start server to listen
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow);
});

