const express = require("express");
const app = express();
const { mongoose } = require("./Backend/database/mongoose");
const { Tdee } = require("./Backend/database/model/tdeeModel");
const port = process.env.PORT || 3000;              
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://calorie-app-heroku.herokuapp.com"); // update to match the domain you will make the request from
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

app.get("/tdees", (req, res) => {
  Tdee.find({}).then((val) => {
    res.send(val);
  });
});

app.post("/tdees", (req, res) => {
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

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use(express.static(__dirname + '/dist/Frontend'));

app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});