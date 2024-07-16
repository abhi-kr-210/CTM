import { Router } from "express";
import handleSignup from "../controllers/signupController";

const router = Router();

router.post("/user", handleSignup("User"));
router.post("/snapper", handleSignup("Snapper"));

export default router;
