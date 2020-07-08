const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");

// @route POST api/user
// @desc  test route
// @access  public route

router.post(
    "/",
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "We are familiar with email syntax, are we?").isEmail(),
        check(
            "password",
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

            const user = await User.findOne({ email });
            console.log("User : ", user);
            if (user) {
                return res.status(400).json({
                    message:
                        "User with this email already exists. Please Check!",
                });
            }

            // Encrypt the user's password

            // Create the User

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
