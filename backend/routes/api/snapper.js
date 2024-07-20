const express = require("express");
const router = express.Router();
const snapperController = require("../../controllers/snapperController");
const { verifyRole } = require("../../middleware/verifyRole");
const { verifyJWT } = require("../../middleware/verifyJWT");

router
  .route("/")
  .get(verifyJWT, verifyRole("Admin"), snapperController.getAllSnappers)
  .post(verifyJWT, verifyRole("Admin"), snapperController.addSnapper);

router
  .route("/:id")
  .get(verifyJWT, verifyRole("Admin"), snapperController.getSnapper)
  .put(verifyJWT, verifyRole("Admin"), snapperController.updateSnapper)
  .delete(verifyJWT, verifyRole("Admin"), snapperController.deleteSnapper);

module.exports = router;
