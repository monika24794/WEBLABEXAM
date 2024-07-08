const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TvModel = require("./models/Tv");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/TvShowroom");

app.get("/", (req, res) => {
  TvModel.find({})
    .then((tv) => res.json(tv))
    .catch((err) => res.json(err));
});

app.get("/getTv/:id", (req, res) => {
  const id = req.params.id;
  TvModel.findById({ id: id })
    .then((tv) => res.json(tv))
    .catch((err) => res.json(err));
});

app.put("/updateTv/:id", (req, res) => {
  const id = req.params.id;
  TvModel.findByIdAndUpdate(
    { _id: id },
    {
      modelname: req.body.modelname,
      brand: req.body.brand,
      price: req.body.price,
      size: req.body.size,
    }
  )
    .then((tv) => res.json(tv))
    .catch((err) => res.json(err));
});

app.delete("/deleteTv/:id", (req, res) => {
  const id = req.params.id;
  TvModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.post("/addTv", (req, res) => {
  TvModel.create(req.body)
    .then((tv) => res.json(tv))
    .catch((err) => res.status(400).json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});