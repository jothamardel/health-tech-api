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
   const response = await Unwell.findOneAndUpdate({ userId: req.body.userId }, {...req.body}, { upsert: true});
   res.status(201).json({
    message: "Operation successful",
    status: "success",
    success: true,
    data: response
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

async function httpDoctorDiagnosis(req, res) {
  
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