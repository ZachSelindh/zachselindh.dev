const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");

// API tets route
router.get("/test", (req, res) => {
  res.send({ msg: "API Hit" });
});

// Get all projects in database
router.get("/allprojects", (req, res) => {
  Project.find({})
    .sort({ completed_date: -1 })
    .then(foundProjects => res.send(foundProjects))
    .catch(err => res.json(err));
});

// Uses Route Parameters to identify and query the technology
// as part of the API route
router.get("/tech/:technology", (req, res) => {
  Project.find({ technologies: req.params.technology })
    .sort({ completed_date: -1 })
    .then(foundProjects => res.send(foundProjects))
    .catch(err => res.send(err));
});

module.exports = router;
