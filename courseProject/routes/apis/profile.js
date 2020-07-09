const express = require("express");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const Profile = require("../../models/Profile");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const router = express.Router();

// @route GET api/profile
// @desc  get user's profile details
// @access  private route

// router.get("/", (req, res) => res.send("Profles route"));
// router.post("/", (req, res) => res.send("Posts route"));

router.get("/me", auth, async (req, res) => {
    try {
        // Get the profile details for the User
        const profile = await Profile.findOne({
            user: req.user.id,
        }).populate("user", ["name", "avatar"]);

        return res.status(200).json({ profile });
    } catch (err) {
        console.log("Server Error : ", err);
        return res.status(500).send("Server Error");
    }
});

// @route POST api/profile
// @desc  Create or Update profiles by user id
// @access  private route

router.post(
    "/",
    [
        auth,
        [
            check("status", "Please provide your status!!").not().isEmpty(),
            check("skills", "Don't have any skills huh? :/").not().isEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // Check if the Profile Exists
            const { status, skills, company } = req.body;

            profileFields = {};
            profileFields.user = req.user.id;
            profileFields.status = status;
            profileFields.skills = skills.split(",");
            if (company) {
                profileFields.company = company;
            }

            let profile = await Profile.findOne({
                user: req.user.id,
            }).populate("user", ["name", "avatar"]);
            if (profile) {
                // Profile Exists
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                ).populate("user", ["name", "avatar"]);

                return res.status(200).json({ updatedProfile: profile });
            }

            // New Profile
            profile = new Profile(profileFields);

            profile.save();

            return res.status(200).json({ createdProfile: profile });
        } catch (err) {
            console.log("Server Error: ", err);
            return res.send(500).send("Server Error");
        }
    }
);

// @route GET api/profile/all
// @desc  Fetch all profiles
// @access  public route

router.get("/all", async (req, res) => {
    try {
        const profile = await Profile.find().populate("user", [
            "name",
            "avatar",
        ]);
        return res.status(200).json(profile);
    } catch (err) {
        console.log("Server Error: ", err);
        return res.status(500).send("Server Error");
    }
});

// @route GET api/profile/user/:user_id
// @desc  Fetch one profile based on user id
// @access  public route

router.get("/user/:user_id", async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.params.user_id,
        }).populate("user", ["name", "avatar"]);
        if (!profile) {
            return res.status(400).json({
                message: `User ID: ${req.params.user_id}, not found!! :)`,
            });
        }

        return res.status(200).json(profile);
    } catch (err) {
        console.log("Server Error: ", err);
        return res.status(500).send("Server Error");
    }
});

module.exports = router;
