


function httpLoginUser(req, res) {

  res.status(200).json({
    message: "Login successful!",
    status: 'successful'
  });
}

function httpRegisterUser(req, res) {
  
  res.status(200).json({
    message: "Registeration successful!",
    status: 'successful'
  });
}


module.exports = {
  httpLoginUser,
  httpRegisterUser
}