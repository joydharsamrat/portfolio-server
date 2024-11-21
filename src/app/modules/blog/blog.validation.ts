import { z } from "zod";

const createBlogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().optional(),
  content: z.string().min(1, "Content is required"),
  intro: z.string().min(1, "Intro is required"),
  tags: z.array(z.string()).optional(),
  category: z.string().optional(),
  coverImage: z.string().optional(),
  isDeleted: z.boolean().optional(),
});

const updateBlogSchema = createBlogSchema.partial();

export const blogValidationSchemas = {
  createBlogSchema,
  updateBlogSchema,
};
