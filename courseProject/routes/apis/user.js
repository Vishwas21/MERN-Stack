const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route GET api/user
// @desc  test route
// @access  private route

router.get(
    "/",
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "We are familiar with email syntax, are we?").isEmail(),
        check(
            "pass",
            "Hey, lets enter a more secure passsword, 6 characters or more"
        ).isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send("Yep");
    }
);

// router.post("/", (req, res) => res.send("Posts route"));

module.exports = router;
