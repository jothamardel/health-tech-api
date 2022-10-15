require("dotenv").config();
const mongoose = require("mongoose");
const mongo_URL = process.env.mongo_URL
  

// console.log(mongo_URL);

mongoose.connection.on("open", () => {
  console.log(`database connected @ ${mongoose.connection.host}`);
});

mongoose.connection.on("error", (err) => {
  console.log(`database connection failed with ${err}`);
  process.exit(1);
});

const mongoConnect = async () => {
  await mongoose.connect(`${mongo_URL}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = { mongoConnect };
