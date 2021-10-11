//
const Recruiter = require('../models/Recruiter');

/*  exports.methodCRUD = async (req, res, next) => {
      function ...
      try {}
      catch {}
    };
*/

//  GET

// @desc  Get all recruiters
// @route GET /recruiters
// @access  public
exports.getRecruiters = async (req, res, next) => {
  let qry;
    console.log(`Query format: "?fieldName[operator]=value"`);
  let qryStr = JSON.stringify(req.query);
  qryStr = qryStr.replace(/\b(gt|gte|lt|lte|eq|neq|in)\b/gi, match => `$${match}`);  
  qry = Recruiter.find(JSON.parse(qryStr));

  try {
    const recruiters = await qry;
    res.status(200).json({ count: recruiters.length, data: recruiters});
  }
  catch (err) {
    res.status(400).json(err);
  }
};

// @desc  Get single recruiter
// @route GET /recruiters/:id
// @access  public
exports.getRecruiter = async (req, res, next) => {
  try {
    const recruiter = await Recruiter.findById(req.params.id);
    if (!recruiter) {return res.status(400).json({success: false});
    }
    res.status(200).json({data: recruiter});
  }
  catch (err) {
    res.status(400).json(err);
  }
};

// @desc  create recruiter
// @route POST /recruiters
// @access  private
exports.createRecruiter = async (req, res, next) => {
  const recruiter = await Recruiter.create(req.body);
  res.status(201).json({ success: true, data: recruiter});
};

// @desc  update recruiter
// @route PUT /recruiters/:id
// @access  private
exports.updateRecruiter = async (req, res, next) => {
  const recruiter = await Recruiter.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!recruiter) {return res.status(400).json({success: false});
  }
  res.status(200).json({success: true, data: recruiter});
};

// @desc  Delete recruiter
// @route DELETE /recruiters/:id
// @access  public
exports.deleteRecruiter = async (req, res, next) => {
  const recruiter = await Recruiter.findByIdAndDelete(req.params.id);
  if (!recruiter) {return res.status(400).json({success: false});
  }
  res.status(200).json({success: true, data: recruiter});
};
