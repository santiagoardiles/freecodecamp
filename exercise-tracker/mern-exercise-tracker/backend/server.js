/*       server.js       */

// Setup.
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Enviroment variables.
require("dotenv").config();

// Express server declaration.
const app = express();
const port = process.env.PORT || 5000;

// Middleware.
app.use(cors());
app.use(express.json());

// MongoDB configuration.
const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

connection.once("open", () => {
  console.log("MongoDB connection established succesfully.");
});

// Starts server.
app.listen(port, () => {
  console.log(`Server is running on port: ${port}.`);
});
