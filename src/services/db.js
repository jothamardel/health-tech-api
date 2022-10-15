require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connection.on("open", () => {
  console.log(`database connected @ ${mongoose.connection.host}`);
});

mongoose.connection.on("error", (err) => {
  console.log(`database connection failed with ${err}`);
  process.exit(1);
});
mongo_URL = "mongodb+srv://Health:Health@cluster0.5u1jwt1.mongodb.net/health";

const mongoConnect = async () => {
  await mongoose.connect(mongo_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = { mongoConnect };
