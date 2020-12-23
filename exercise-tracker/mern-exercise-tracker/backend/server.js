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

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

connection.once("open", () => {
  console.log("MongoDB connection established succesfully.\n");
});

// Routes
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// Starts server.
app.listen(port, () => {
  console.log(`\nServer is running on port: ${port}.`);
});
