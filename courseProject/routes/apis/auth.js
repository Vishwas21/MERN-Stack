const express = require("express");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const router = express.Router();

// @route GET api/auth
// @desc  get user details
// @access  public route

// router.get("/", (req, res) => res.send("Auth route"));
// router.get("/random", (req, res) => res.send("Auth route, random"));

// router.post("/", (req, res) => res.send("Posts route"));

router.get("/", auth, async (req, res) => {
    try {
        // Get the user ID
        const user = await User.findById(req.user.id).select("-pass");
        res.status(200).json(user);
    } catch (err) {
        console.log("Auth Error : ", err);
        return res.status(500).send("Server Error");
    }
});

// @route POST api/auth
// @desc  Login User
// @access  public route

router.post(
    "/",
    [
        check(
            "email",
            "We are familiar with email syntax, aren't we?"
        ).isEmail(),
        check(
            "pass",
            "Hey, lets enter a more secure passsword, 6 characters or more"
        ).exists(),
    ],
    async (req, res) => {
        // Validate the user input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // Check if the user exists
            const { email, pass } = req.body;

            let user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({
                    message: "User not registered. Please Sign Up :)",
                });
            }

            // Check if the password is a match
            const isMatch = await bcrypt.compare(pass, user.pass);
            if (!isMatch) {
                return res.status(401).json({
                    message: "Invalid password! :(",
                });
            }

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
            console.log("Server Error  : ", err);
            res.status(500).send("Server Error");
        }
    }
);
module.exports = router;
