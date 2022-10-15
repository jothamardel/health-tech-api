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

    const user = await Profile.findOneAndUpdate({ userId: req.body.userId }, {...req.body}, { upsert: true});
    await User.findOneAndUpdate({ _id: req.body.userId }, {is_active: true});
    res.status(200).json({
      message: "successful",
      status: "success",
      success: true,
      data: user,
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
