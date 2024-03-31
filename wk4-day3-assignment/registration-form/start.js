// Importing required modules
require("dotenv").config();
const mongoose = require("mongoose");
require("./models/Registration");
const app = require("./app");

// Connecting to the MongoDB database
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handling MongoDB connection events
mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });

// Starting the Express server
const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
