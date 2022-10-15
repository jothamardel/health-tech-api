const { Schema, model } = require("mongoose");

const profile = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    medical_history: []
  },
  { timestamps: true }
);

module.exports = { Profile: model("profile", profile, "profiles") };
