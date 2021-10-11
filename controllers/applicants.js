//
const Applicant = require('../models/Applicant');

/*  exports.methodCRUD = async (req, res, next) => {
      function ...
      try {}
      catch {}
    };
*/

//  GET

// @desc  Get all applicants
// @route GET /applicants
// @access  public
exports.getApplicants = async (req, res, next) => {
  let qry;
    console.log(`Query format: "?fieldName[operator]=value"`);
  let qryStr = JSON.stringify(req.query);
  qryStr = qryStr.replace(/\b(gt|gte|lt|lte|eq|neq|in)\b/gi, match => `$${match}`);  
  qry = Applicant.find(JSON.parse(qryStr));

  try {
    const applicants = await qry;
    res.status(200).json({ count: applicants.length, data: applicants});
  }
  catch (err) {
    res.status(400).json(err);
  }
};

// @desc  Get single applicant
// @route GET /applicants/:id
// @access  public
exports.getApplicant = async (req, res, next) => {
  try {
    const applicant = await Applicant.findById(req.params.id);
    if (!applicant) {return res.status(400).json({success: false});
    }
    res.status(200).json({data: applicant});
  }
  catch (err) {
    res.status(400).json(err);
  }
};

// @desc  create applicant
// @route POST /applicants
// @access  private
exports.createApplicant = async (req, res, next) => {
  const applicant = await Applicant.create(req.body);
  res.status(201).json({ success: true, data: applicant});
};

// @desc  update applicant
// @route PUT /applicants/:id
// @access  private
exports.updateApplicant = async (req, res, next) => {
  const applicant = await Applicant.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!applicant) {return res.status(400).json({success: false});
  }
  res.status(200).json({success: true, data: applicant});
};

// @desc  Delete applicant
// @route DELETE /applicants/:id
// @access  public
exports.deleteApplicant = async (req, res, next) => {
  const applicant = await Applicant.findByIdAndDelete(req.params.id);
  if (!applicant) {return res.status(400).json({success: false});
  }
  res.status(200).json({success: true, data: applicant});
};
