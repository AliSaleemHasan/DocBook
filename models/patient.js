const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paSchema = new Schema({
  history: [Number],
});

module.exports.Patient = mongoose.model("Patient", paSchema, "Patients");
