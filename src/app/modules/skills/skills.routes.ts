import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { skillsValidationSchemas } from "./skills.validation";
import { skillControllers } from "./skills.controllers";
const router = express.Router();

router.post(
  "/add-skill",
  validateRequest(skillsValidationSchemas.addSkillsValidationSchema),
  skillControllers.handleAddSkill
);

router.get("/", skillControllers.handleGetAllSkills);
router.put(
  "/:id",
  validateRequest(skillsValidationSchemas.updateSkillsValidationSchema),
  skillControllers.handleUpdateSkill
);

export const skillRoutes = router;
