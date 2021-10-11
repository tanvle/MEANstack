// db.js for mongoDB
const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`mongoDB connected at ${conn.connection.host} ${process.env.MONGO_URI}`.cyan.underline);
};

module.exports = connectDB;
