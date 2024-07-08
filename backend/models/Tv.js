const mongoose = require("mongoose");

const TvSchema = new mongoose.Schema({
  modelname: String,
  brand: String,
  price: Number,
  size: Number,
});

const TvModel = mongoose.model("tv", TvSchema);
module.exports = TvModel;