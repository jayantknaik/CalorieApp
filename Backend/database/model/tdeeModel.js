const mongoose = require("mongoose");

const tdeeSchema = new mongoose.Schema({
  weight: {
    type: Number,
    requiried: true,
    minlength: 1,
    trim: true,
  },
  bodyFat: {
    type: Number,
    requiried: true,
    minlength: 1,
    trim: true,
  },
  activity: {
    type: Number,
    requiried: true,
    minlength: 1,
    trim: true,
  },
});

const Tdee = mongoose.model("Tdee", tdeeSchema);
module.exports = { Tdee };
