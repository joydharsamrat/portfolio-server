import { z } from "zod";

export const categorySchema = z.object({
  title: z.string().min(1, "Title is required"),
  isDeleted: z.boolean().optional(),
});
