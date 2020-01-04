const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");

router.get("/", (req, res) => {
  res.send({ msg: "API Hit" });
});

router.get("/all"),
  (req, res) => {
    Project.find({})
      .then(res => res.send())
      .catch(err => res.json(err));
  };

module.exports = router;
