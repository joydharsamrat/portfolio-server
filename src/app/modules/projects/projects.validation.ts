import { z } from "zod";

const testimonialSchema = z.object({
  name: z.string().min(1, "Name is required"),
  feedback: z.string().min(1, "Feedback is required"),
});

const addProjectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  description: z.string().min(1, "Description is required"),
  images: z
    .array(z.string().url("Each image must be a valid URL"))
    .nonempty("At least one image is required"),
  techStack: z
    .array(z.string())
    .nonempty("At least one technology is required"),
  role: z.string().min(1, "Role is required"),
  clientRepoLink: z
    .string()
    .url("Client repo link must be a valid URL")
    .optional(),
  serverRepoLink: z
    .string()
    .url("Server repo link must be a valid URL")
    .optional(),
  liveDemoLink: z.string().url("Live demo link must be a valid URL").optional(),
  testimonials: z.array(testimonialSchema).optional(),
  videoDemo: z.string().url("Video demo link must be a valid URL").optional(),
  isTeamProject: z.boolean().optional(),
  teamMembers: z.array(z.string()).optional(),
  isDeleted: z.boolean().optional(),
});

const updateProjectSchema = addProjectSchema.partial();

export const projectValidationSchemas = {
  addProjectSchema,
  updateProjectSchema,
};
