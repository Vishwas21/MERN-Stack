const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

// @route POST api/user
// @desc  test route
// @access  public route

router.post(
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
        // Validate the user input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // Check if the user exists
            const { name, email, pass } = req.body;

            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({
                    message:
                        "User with this email already exists. Please Check!",
                });
            }
            // Generate a gravatar url
            const avatar = gravatar.url(email, {
                s: "200",
                r: "g",
                d: "mm",
            });

            // Initialize User
            user = new User({
                name,
                email,
                pass,
                avatar,
            });

            // Encrypt the user's password
            const salt = await bcrypt.genSalt(10);
            user.pass = await bcrypt.hash(user.pass, salt);

            // Create the User
            user.save();

            // Generate JWT token and send it back
        } catch (err) {
            console.log("Server Error : ", err);
            return res.status(500).send("Server Error");
        }

        res.send("Yep!! All Good! :)");
    }
);

// router.post("/", (req, res) => res.send("Posts route"));

module.exports = router;
