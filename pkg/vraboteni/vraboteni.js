const mongoose = require("mongoose");

const vraboteniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

const Vraboteni = mongoose.model("Vraboteni", vraboteniSchema);

module.exports = Vraboteni;