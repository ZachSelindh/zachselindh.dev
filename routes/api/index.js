const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");

router.get("/", (req, res) => {
  res.send({ msg: "API Hit" });
});

router.get("/allprojects", (req, res) => {
  Project.find({})
    .then(foundProjects => res.send(foundProjects))
    .catch(err => res.json(err));
});

router.get("/tech/:technology", (req, res) => {
  Project.find({ technologies: req.params.technology })
    .sort({ date_completed: -1 })
    .then(foundProjects => res.send(foundProjects))
    .catch(err => res.send(err));
});

module.exports = router;
