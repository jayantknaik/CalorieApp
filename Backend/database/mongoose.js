// This file will handle connection logic to MongoDB database

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI || "mongodb+srv://Jayant:jayantknaik@cluster0.a9plg.mongodb.net/", {
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
