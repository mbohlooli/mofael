const express = require("express");
const users = require("../routes/users");
const auth = require("../routes/auth");
const schools = require("../routes/schools");
const grades = require("../routes/grades");
const classrooms = require("../routes/classrooms");
const lessons = require("../routes/lessons");
const studies = require("../routes/studies");
const error = require("../middleware/error");
const cors = require("cors");

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());
  app.use("/users", users);
  app.use("/auth", auth);
  app.use("/schools", schools);
  app.use("/grades", grades);
  app.use("/classrooms", classrooms);
  app.use("/lessons", lessons);
  app.use("/studies", studies);
  app.use(error);
};
