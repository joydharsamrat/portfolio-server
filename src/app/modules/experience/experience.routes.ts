import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { experienceValidationSchemas } from "./experience.validation";
import { experienceControllers } from "./experience.controllers";

const router = express.Router();

router.post(
  "/add-experience",
  validateRequest(experienceValidationSchemas.addExperienceSchema),
  experienceControllers.handleAddExperience
);

router.get("/", experienceControllers.handleGetAllExperiences);
router.get("/:id", experienceControllers.handleGetSingleExperience);

router.put(
  "/:id",
  validateRequest(experienceValidationSchemas.updateExperienceSchema),
  experienceControllers.handleUpdateExperience
);

router.delete("/:id", experienceControllers.handleDeleteExperience);

export const experienceRoutes = router;
