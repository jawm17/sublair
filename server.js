const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const router = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");

const db = "mongodb+srv://koikoi5:koikoi5@cluster0.lnkmi3d.mongodb.net/?retryWrites=true&w=majority";
const db_dev = "mongodb://localhost:27017/sublair";

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
}

app.use(express.static("client/build"));

// Add routes, both API and view
app.use(router);

// Connect to the Mongo DB
if (process.env.NODE_ENV === "production") {
  mongoose.connect(db_dev, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
} else {
  mongoose.connect(db_dev, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
}

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
