import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { categorySchema } from "./category.validation";
import { categoryControllers } from "./category.controllers";
const router = express.Router();

router.post(
  "/add-category",
  validateRequest(categorySchema),
  categoryControllers.handleAddCategory
);

router.get("/", categoryControllers.handleGetAllCategories);
router.get("/:id", categoryControllers.handleGetSingleCategory);
router.put(
  "/:id",
  validateRequest(categorySchema),
  categoryControllers.handleUpdateCategory
);

router.delete("/:id", categoryControllers.handleDeleteCategory);

export const categoryRoutes = router;
