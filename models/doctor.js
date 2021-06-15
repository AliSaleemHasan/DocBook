const mongoose = require("mongoose");
const _ = require("underscore");
const { validSpecilaties } = require("../config");

const Schema = mongoose.Schema;

const rateSchema = new Schema({
  waitTime: Number,
  besideManner: Number,
  all: Number,
});

const hospitalSchema = new Schema({
  name: String,
  //TODO google hashed key
});

const drSchema = new Schema({
  specialties: [
    {
      type: String,
      required: true,
      enum: ["اطفال", "عظمية", "عام", "اسنان"],
    },
  ],
  location: {
    type: [Number, Number],
    default: [-400000, -400000],
  },
  claimed: false,
  hospitals: [hospitalSchema],
  rate: rateSchema,
  // address:
});

module.exports.Doctor = mongoose.model("Doctor", drSchema, "Doctors");
