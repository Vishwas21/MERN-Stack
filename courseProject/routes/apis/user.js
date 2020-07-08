const express = require("express");
const router = express.Router();

// @route GET api/user
// @desc  test route
// @access  private route

router.get("/", (req, res) => res.send("User route"));

// router.post("/", (req, res) => res.send("Posts route"));

module.exports = router;
