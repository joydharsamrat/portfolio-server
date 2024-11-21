import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { blogValidationSchemas } from "./blog.validation";
import { blogControllers } from "./blog.controllers";
const router = express.Router();

router.post(
  "/add-blog",
  validateRequest(blogValidationSchemas.createBlogSchema),
  blogControllers.handleAddBlog
);

router.get("/", blogControllers.handleGetAllBlogs);
router.get("/:id", blogControllers.handleGetSingleBlog);
router.put(
  "/:id",
  validateRequest(blogValidationSchemas.updateBlogSchema),
  blogControllers.handleUpdateBlog
);

router.delete("/:id", blogControllers.handleDeleteBlog);

export const blogRoutes = router;
