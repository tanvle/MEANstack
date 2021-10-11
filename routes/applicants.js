const express = require('express');

const {
  getApplicants,
  getApplicant,
  createApplicant,
  updateApplicant,
  deleteApplicant
} = require('../controllers/applicants');

// mount above methods to router
const router = express.Router();

router.route('/')
  .get(getApplicants)
  .post(createApplicant);

router.route('/:id')
  .get(getApplicant)
  .put(updateApplicant)
  .delete(deleteApplicant);

// export router
module.exports = router; 