const express = require("express");
const router = express.Router();
const profileController = require("../../controllers/profileController");
const profilePicController = require("../../controllers/profilePicController");
const { verifyJWT } = require("../../middleware/verifyJWT");

router.route("/").get(verifyJWT, profileController.getProfile);
router.route("/profilePic").put(verifyJWT, profilePicController.setProfilePic);
router.route("/:field").put(verifyJWT, profileController.setProfile);

module.exports = router;
