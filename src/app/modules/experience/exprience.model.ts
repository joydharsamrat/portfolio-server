import { model, Schema } from "mongoose";
import { TExperience } from "./experience.interface";

const ExperienceSchema = new Schema<TExperience>({
  company: { type: String, required: true },
  title: { type: String, required: true },
  website: { type: String, required: false },
  location: { type: String, required: false },
  details: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  techStack: { type: [String], required: false },
  isDeleted: { type: Boolean, default: false },
});

export const Experience = model<TExperience>("Experience", ExperienceSchema);
