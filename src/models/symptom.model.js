const { Schema, model } = require("mongoose");

const symptom = new Schema(
  {
    userId: {
      type: String,
    },
    permissions: [
      {
        doctorId: { type: String },
        allow: { type: Boolean, default: false },
      },
    ],
    diagnosis: [
      {
        question: { type: String },
        answer: [{ String }],
      },
    ],
  },
  { timestamps: true }
);
module.exports = { Symptom: model("symptom", symptom, "symptoms") };
