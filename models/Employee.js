const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  eid: {type: String, unique: true,  required: true},
  firstName: String,
  lastName: String,
  gender: String,
  email: String,
  contact: String,
  salary: {type: Number, min: 50000}
});

module.exports = mongoose.model('Employee', EmployeeSchema, 'employees');