const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const config = require("config");

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
            await user.save();

            // Generate JSON Web Token(JWT) and send it back
            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                config.get("jwtToken"),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) {
                        return res
                            .status(400)
                            .send("Token could not be generated!!");
                    }
                    res.status(200).json({ token });
                }
            );
        } catch (err) {
            console.log("Server Error : ", err);
            return res.status(500).send("Server Error");
        }

        res.send("Yep!! All Good! :)");
    }
);

// router.post("/", (req, res) => res.send("Posts route"));

module.exports = router;
