const mongoose = require('mongoose');

const RecruiterSchema = new mongoose.Schema({
  ein: {type: String, required: true, unique: true},
  firstName: String,
  lastName: String,
  email: String,
  gender: String,
  Region: String,
  isSupervisor: Boolean
});

module.exports = mongoose.model('Recruiter', RecruiterSchema, 'recruiters');