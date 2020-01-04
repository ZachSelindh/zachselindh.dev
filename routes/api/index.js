const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");

router.get("/", (req, res) => {
  res.send({ msg: "API Hit" });
});

router.get("/getallprojects", (req, res) => {
  Project.find({})
    .then(foundProjects => res.send(foundProjects))
    .catch(err => res.json(err));
});

/* router.get("/react", (req, res) => {
  Project.find({ technologies: "React" })
    .sort({ date_completed: -1 })
    .then(reactProjects => res.send(reactProjects))
    .catch(err => res.send(err));
}); */

router.get("/jquery", (req, res) => {
  Project.find({ technologies: "JQuery" })
    .sort({ date_completed: -1 })
    .then(jqueryProjects => res.send(jqueryProjects))
    .catch(err => res.send(err));
});

module.exports = router;
