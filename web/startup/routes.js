const express = require("express");
const users = require("../routes/users");
const auth = require("../routes/auth");
const error = require("../middleware/error");
const cors = require("cors");

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());
  app.use("/users", users);
  app.use("/auth", auth);
  app.use(error);
};
