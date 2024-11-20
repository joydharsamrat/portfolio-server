import { Schema, model } from "mongoose";
import { TProject, TTestimonials } from "./project.interface";

const testimonialSchema = new Schema<TTestimonials>({
  name: { type: String, required: true },
  feedback: { type: String, required: true },
});

const projectSchema = new Schema<TProject>(
  {
    name: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    techStack: { type: [String], required: true },
    role: { type: String, required: true },
    clientRepoLink: { type: String },
    serverRepoLink: { type: String },
    liveDemoLink: { type: String },
    testimonials: { type: [testimonialSchema], default: [] },
    videoDemo: { type: String },
    isTeamProject: { type: Boolean, default: false },
    teamMembers: { type: [String], default: [] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Project = model<TProject>("Project", projectSchema);

export default Project;
