import { z } from "zod";

const addSkillsValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  logo: z.string().min(1, "Logo is required"),
});

const updateSkillsValidationSchema = addSkillsValidationSchema.partial();

export const skillsValidationSchemas = {
  addSkillsValidationSchema,
  updateSkillsValidationSchema,
};
