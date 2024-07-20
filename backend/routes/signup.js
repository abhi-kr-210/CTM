const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signupController");

router.post("/user", signupController.handleSignup("User"));
router.post("/snapper", signupController.handleSignup("Snapper"));

module.exports = router;
