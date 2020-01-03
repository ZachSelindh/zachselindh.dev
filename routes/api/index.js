const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ msg: "API Hit" });
});

module.exports = router;
