import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { projectValidationSchemas } from "./projects.validation";
import { projectControllers } from "./project.controller";

const router = express.Router();

router.post(
  "/add-project",
  validateRequest(projectValidationSchemas.addProjectSchema),
  projectControllers.handleAddProject
);

router.get("/", projectControllers.handleGetAllProjects);
router.get("/:id", projectControllers.handleGetSingleProject);
router.delete("/:id", projectControllers.handleDeleteProject);
router.put(
  "/:id",
  validateRequest(projectValidationSchemas.updateProjectSchema),
  projectControllers.handleUpdateProject
);

router.delete("/:id", projectControllers.handleDeleteProject);

export const projectRoutes = router;
