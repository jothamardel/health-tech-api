const { Schema, model } = require("mongoose");

const profile = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answer: [{}],
  },
  { timestamps: true }
);

module.exports = { Profile: model("profile", profile, "profiles") };
