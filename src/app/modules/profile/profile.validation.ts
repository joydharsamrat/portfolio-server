import { z } from "zod";

const ProfileValidationSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  designation: z.string().min(1, "Designation is required").optional(),
  image: z.string().url("Image must be a valid URL").optional(),
  about: z.string().min(1, "About is required").optional(),
  resumeDownloadLink: z
    .string()
    .url("Resume Download Link must be a valid URL")
    .optional(),
  resumeViewLink: z
    .string()
    .url("Resume View Link must be a valid URL")
    .optional(),
  facebook: z.string().url("Facebook must be a valid URL").optional(),
  linkedIn: z.string().url("LinkedIn must be a valid URL").optional(),
  gitHub: z.string().url("GitHub must be a valid URL").optional(),
  phone: z.string().min(1, "Phone is required").optional(),
  whatsapp: z.string().optional(),
  address: z.string().min(1, "Address is required").optional(),
  email: z.string().email("Email must be a valid email address").optional(),
});

export default ProfileValidationSchema;
