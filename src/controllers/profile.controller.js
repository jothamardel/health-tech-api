const { Profile } = require("../models/profile.model");
const { User } = require("../models/user.model");

async function httpCreateUserAndUpdateMedicalHistory(req, res) {
  let { userId } = req.body;
  if (!userId) {
    res.status(400).json({
      message: "Unable to complete, All fields Required!",
      success: false,
      status: "error",
    });
    return;
  }
  try {

    let user = await Profile.findOneAndUpdate({ userId: req.body.userId }, {...req.body}, { upsert: true});
    user  = await Profile.findOne({ userId: req.body.userId });
    user = {...req.body};
    await user.save();
    const userData = await User.findOne({ _id: req.body.userId });
    console.log(userData)
    userData.is_active = true;
    await userData.save();
    res.status(200).json({
      message: "successful",
      status: "success",
      success: true,
      data: user,
      userDetails: userData
    });
  } catch (error) {
    res.status(200).json({
      message: "Unable to perform operation",
      error: error.message,
      success: false,
      status: "error",
    });
  }
}
module.exports = {
  httpCreateUserAndUpdateMedicalHistory,
};
