const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  avatart: String,
  firstName: String,
  lastName: String,
  dob: String,
  gender: String,
  phone: String,
  email: String,
  streetAddress: String,
  city: String,
  province: String,
  postalCode: String,
  country: String,
  income: Number,
  scoreS: Number,
  scoreM: Number,
  scoreA: Number,
  scoreR: Number,
  scoreT: Number,
  textEntry: String
});

module.exports = mongoose.model('Applicant', ApplicantSchema, 'applicants');