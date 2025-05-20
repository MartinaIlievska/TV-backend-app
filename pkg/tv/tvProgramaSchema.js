const mongoose = require("mongoose");

const tvProgramaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    enum: ["cartoon", "turkish drama", "news", "sport"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vraboten",
  },
});

const TVPrograma = mongoose.model("TV", tvProgramaSchema);
module.exports = TVPrograma;
