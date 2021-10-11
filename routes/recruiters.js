const express = require('express');

const {
  getRecruiters,
  getRecruiter,
  createRecruiter,
  updateRecruiter,
  deleteRecruiter
} = require('../controllers/recruiters');

// mount above methods to router
const router = express.Router();

router.route('/')
  .get(getRecruiters)
  .post(createRecruiter);

router.route('/:id')
  .get(getRecruiter)
  .put(updateRecruiter)
  .delete(deleteRecruiter);

// export router
module.exports = router; 