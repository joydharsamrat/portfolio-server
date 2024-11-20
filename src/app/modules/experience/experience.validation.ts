import { z } from "zod";

const addExperienceSchema = z.object({
  company: z.string().min(1, "Company name is required"),
  title: z.string().min(1, "Job title is required"),
  website: z.string().url().optional(),
  location: z.string().optional(),
  details: z.string().min(1, "Details about the experience are required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  techStack: z.array(z.string()).optional(),
  isDeleted: z.boolean().optional(),
});

const updateExperienceSchema = addExperienceSchema.partial();

export const experienceValidationSchemas = {
  addExperienceSchema,
  updateExperienceSchema,
};
