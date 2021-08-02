// This file will handle connection logic to MongoDB database

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/CalorieApp", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully.");
  })
  .catch((e) => {
    console.log("Error while connecting to MongoDB.");
    console.log(e);
  });
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
module.exports = {
  mongoose,
};
