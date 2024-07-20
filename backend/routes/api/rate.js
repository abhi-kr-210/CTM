const express = require("express");
const router = express.Router();
const ratingController = require("../../controllers/ratingController");
const { verifyJWT } = require("../../middleware/verifyJWT");
const { verifyRole } = require("../../middleware/verifyRole");

router
  .route("/:snapperID")
  .get(verifyJWT, verifyRole("User"), ratingController.getRating)
  .post(verifyJWT, verifyRole("User"), ratingController.addRating)
  .put(verifyJWT, verifyRole("User"), ratingController.updateRating)
  .delete(verifyJWT, verifyRole("User"), ratingController.deleteRating);

module.exports = router;
