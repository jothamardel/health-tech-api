const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const indexRoute = require('./src/routes/routes');



app.use(express.json());
app.use(morgan("dev"));

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

app.use(indexRoute);

module.exports = { app };
