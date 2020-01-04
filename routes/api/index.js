const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");

router.get("/", (req, res) => {
  res.send({ msg: "API Hit" });
});

router.get("/getallprojects", (req, res) => {
  Project.find({})
    .then(Projects => res.send(Projects))
    .catch(err => res.json(err));
});

module.exports = router;
