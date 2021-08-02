const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { mongoose } = require("./database/mongoose");
const { Tdee } = require("./database/model/tdeeModel");

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/tdee", (req, res) => {
  Tdee.find({}).then((val) => {
    res.send(val);
  });
});

app.post("/tdee", (req, res) => {
  let weight = req.body.weight;
  let bodyFat = req.body.bodyFat;
  let activity = req.body.activity;
  let newItem = new Tdee({
    weight,
    bodyFat,
    activity,
  });
  newItem
    .save()
    .then((val) => {
      res.send(val);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
