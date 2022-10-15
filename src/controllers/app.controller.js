async function getRoot(req, res) {
  res.status(200).json({
    message: "success",
  });
}
module.exports = { getRoot };
