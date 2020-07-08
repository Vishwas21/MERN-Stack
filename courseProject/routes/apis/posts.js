const express = require("express");
const router = express.Router();

// @route GET api/posts
// @desc  test route
// @access  private route

router.get("/", (req, res) => res.send("Posts route"));

// router.post("/", (req, res) => res.send("Posts route"));

module.exports = router;
