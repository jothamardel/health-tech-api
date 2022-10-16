const { findById } = require("../models/unwell.model");
const Unwell = require("../models/unwell.model");



async function httpUnwell(req, res) {
  if(!req.body.full_name || !req.body.userId ) {
    return res.status(400).json({
      message: "Operation unsuccessful. All fields required.",
      status: "error",
      success: false
    })
  }
  try {
  //  let response  = await Unwell.findOneAndUpdate({ userId: req.body.userId }, {...req.body}, {upsert: true, new: true});
    // let response = await Unwell.findOne({ userId: req.body.userId })
    // console.log(response)
    // response = {...req.body}
    // await response.save();
    // console.log(response);
  //  res.status(201).json({
  //   message: "Operation successful",
  //   status: "success",
  //   success: true,
  //   data: response
  //  })
  const record = await Unwell.findOne({ userId: req.body.userId});
  if (!record) {
    const newRecord = new Unwell({
      ...req.body
    });
    await newRecord.save();
    return res.status(200).json({
      message: "Operation successful",
      status: "success",
      success: true,
      data: newRecord
    })
  }

  await Unwell.findOneAndUpdate({ userId: req.body.userId}, req.body);
  httpFindOneAndReturn(req, res);
  // console.log(record);
  } catch (error) {
    res.status(400).json({
      message: "Operation unsuccessful",
      status: "error",
      success: false,
      error: error.message
    })
  }
}

async function httpDoctorDiagnosis(req, res) {
  
}

async function httpFindOneAndReturn(req, res) {
  try {
    const single = await Unwell.find({ userId: req.body.userId });
    res.status(200).json({
      message: "operation successfully!",
      status: "success",
      success: true,
      data: single
    })
  } catch (error) {
    res.status(400).json({
      message: "Operation unsuccessful",
      status: "error",
      success: false,
      error: error.message
    })
  }
}

async function httpAllUnwell(req, res) {
  try {
    const allUnwell = await Unwell.find({});
    res.status(200).json({
      message: "All data retrieved, successfully!",
      status: "success",
      success: true,
      data: allUnwell
    })
  } catch (error) {
    res.status(400).json({
      message: "Operation unsuccessful",
      status: "error",
      success: false,
      error: error.message
    })
  }
}

async function httpSingleUnwell(req, res) {
  try {
    const single = await Unwell.find({ userId: req.params.id });
    res.status(200).json({
      message: "All data retrieved, successfully!",
      status: "success",
      success: true,
      data: single
    })
  } catch (error) {
    res.status(400).json({
      message: "Operation unsuccessful",
      status: "error",
      success: false,
      error: error.message
    })
  }
}

async function httpUnwellByDate(req, res) {
  
}


module.exports = {
  httpUnwell,
  httpDoctorDiagnosis,
  httpAllUnwell,
  httpSingleUnwell,
  httpUnwellByDate
}