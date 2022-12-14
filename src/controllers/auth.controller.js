const bcrypt = require("bcryptjs");
const { User } = require("../models/user.model");
async function httpLoginUser(req, res) {
  let { email, password } = req.body;

  if (!(email && password)) {
    res.status(400).json({
      message: "all fields required",
      type: "error",
    });
    return;
  }
  try {
    const userData = await User.findOne({ email });
    if (userData && bcrypt.compareSync(password, userData.password)) {
      res.status(200).json({
        message: "logged in successfully",
        data: userData,
        status: "success",
        success: true
      });
      return;
    }
    res.status(400).json({
      message: "Unable to login",
      status: "error",
      success: false
    });
  } catch (error) {
    res.status(400).json({
      error: `${error.message}`,
      message: "Unable to login",
      status: "error",
      success: false
    });
  }
}

async function httpRegisterUser(req, res) {
  let { fullName, email, password } = req.body;
  // check for missing fields

  if (!fullName || !email || !password) {
    return res.status(400).json({
      message: "All fields required",
      status: "error",
      success: false
    });
  }
  try {
    //search if user exist then update
    const allData = await User.findOne({ email });

    if (allData) {
      res.status(200).json({
        message: `${allData.email} belongs to an account. Please Login or Reset Password`,
        status: "error",
        success: false
      });
      return;
    }
    //Encrypt passsword
    let encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      fullName,
      password: encryptedPassword,
    });
    await newUser.save();
    res.status(201).json({
      message: "successfully created",
      data: newUser,
      status: "success",
      success: true
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      error: `${error.message}`,
      status: "error",
      success: false
    });
  }
}

module.exports = {
  httpLoginUser,
  httpRegisterUser,
};
