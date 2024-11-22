import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import ProfileValidationSchema from "./profile.validation";
import { profileControllers } from "./profile.controllers";

const router = express.Router();

router.get("/", profileControllers.handleGetProfile);
router.put(
  "/:id",
  validateRequest(ProfileValidationSchema),
  profileControllers.handleUpdateProfile
);

export const profileRoutes = router;
