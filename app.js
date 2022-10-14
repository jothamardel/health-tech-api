const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
const whitelist = ["http://localhost:3000"];
app.use(
  cors({
    origin: whitelist,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

module.exports = { app };
