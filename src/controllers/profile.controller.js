const { Profile } = require("../models/profile.model");
const { User } = require("../models/user.model");

async function httpCreateUserAndUpdateMedicalHistory(req, res) {
  let { userId, question, answer } = req.body;
  if (!userId || !question || !answer) {
    res.status(404).json({
      message: "Unable to complete, All fields Required!",
      success: false,
      status: "error",
    });
    return;
  }
  try {
    const user = await User.findById({ _id: userId });
    if (!user) {
      res.status(404).json({
        message: "user not found",
        status: "error",
        success: false,
      });
      return;
    }
    const profile = await Profile.findOneAndUpdate(
      { userId: userId },
      { ...req.body }
    );
    const data = await Profile.find({});
    if (!profile) {
      const newProfile = new Profile({
        ...req.body,
      });
      await newProfile.save();
      res.status(201).json({
        message: "successful",
        status: "success",
        success: true,
        data: data,
      });
      return;
    }
    res.status(200).json({
      message: "successful",
      status: "success",
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(200).json({
      message: ` catch ::: ${error.message}`,
      success: false,
      status: "error",
    });
  }
}
module.exports = {
  httpCreateUserAndUpdateMedicalHistory,
};
