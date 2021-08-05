// This file will handle connection logic to MongoDB database

const mongoose = require("mongoose");
const connection = "mongodb+srv://Jayant:jayantknaik@cluster0.a9plg.mongodb.net/CalorieApp?retryWrites=true&w=majority";
mongoose
  .connect(connection, {
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
