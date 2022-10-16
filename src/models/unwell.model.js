const { Schema, model } = require("mongoose");

const unwell = new Schema({
  userId: {
    type: String,
    required: true
  },
  date: {
    type: String,
  },
  full_name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  fever: {
    type: String,
    default: "no"
  },
  decreased_energy: {
    type: String,
    default: "no"
  },
  loss_appetite: {
    type: String,
    default: "no"
  },
  weight_gain: {
    type: String,
    default: "no"
  },
  weight_loss: {
    type: String,
    default: "no"
  },
  headache: {
    type: String,
    default: "no"
  },
  head_injury: {
    type: String,
    default: "no"
  },
  visual_change: {
    type: String,
    default: "no"
  },
  crossed_eyes: {
    type: String,
    default: "no"
  },
  redness_eyes: {
    type: String,
    default: "no"
  },
  runny_nose: {
    type: String,
    default: "no"
  },
  nasal_congestion: {
    type: String,
    default: "no"
  },
  nose_bleed: {
    type: String,
    default: "no"
  },
  difficulty_hearing: {
    type: String,
    default: "no"
  },
  ear_pain:{
    type: String,
    default: "no"
  },
  discharged: {
    type: Boolean,
    default: false
  },
  diagnosis: [],
  permissions: [],
},
  { timestamps: true }
);

module.exports = model("unwell", unwell);
