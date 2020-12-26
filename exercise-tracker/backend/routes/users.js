/*       Users routes.       */

// Setup.
const router = require("express").Router();
let User = require("../models/user.model");

/* -------------- Routes start. -------------- */

// Finds all users.
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Adds a new user.
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

/* -------------- Routes end. -------------- */

// Export.
module.exports = router;
