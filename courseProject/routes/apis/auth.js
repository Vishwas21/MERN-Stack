const express = require("express");
const router = express.Router();

// @route GET api/auth
// @desc  get user details
// @access  private route

router.get("/", (req, res) => res.send("Auth route"));
router.get("/random", (req, res) => res.send("Auth route, random"));

// router.post("/", (req, res) => res.send("Posts route"));

module.exports = router;
