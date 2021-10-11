const Employee = require('../models/Employee');

/*  exports.methodCRUD = async (req, res, next) => {
      function ...
      try {}
      catch {}
    };
*/

//  GET

// @desc  Get all employees
// @route GET /employees
// @access  public
exports.getEmployees = async (req, res, next) => {
  let qry;
    console.log(`Query format: "?fieldName[operator]=value"`);
  let qryStr = JSON.stringify(req.query);
  qryStr = qryStr.replace(/\b(gt|gte|lt|lte|eq|neq|in)\b/gi, match => `$${match}`);  
  qry = Employee.find(JSON.parse(qryStr));

  try {
    const employees = await qry;
    res.status(200).json({ count: employees.length, data: employees});
  }
  catch (err) {
    res.status(400).json(err);
  }
};

// @desc  Get single employee
// @route GET /employees/:id
// @access  public
exports.getEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {return res.status(400).json({success: false});
    }
    res.status(200).json({data: employee});
  }
  catch (err) {
    res.status(400).json(err);
  }
};

// @desc  create employee
// @route POST /employees
// @access  private
exports.createEmployee = async (req, res, next) => {
  const employee = await Employee.create(req.body);
  res.status(201).json({ success: true, data: employee});
};

// @desc  update employee
// @route PUT /employees/:id
// @access  private
exports.updateEmployee = async (req, res, next) => {
  const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!employee) {return res.status(400).json({success: false});
  }
  res.status(200).json({success: true, data: employee});
};

// @desc  Delete employee
// @route DELETE /employees/:id
// @access  public
exports.deleteEmployee = async (req, res, next) => {
  const employee = await Employee.findByIdAndDelete(req.params.id);
  if (!employee) {return res.status(400).json({success: false});
  }
  res.status(200).json({success: true, data: employee});
};