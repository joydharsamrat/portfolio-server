import { model, Schema } from "mongoose";
import { TSkills } from "./skills.interface";

const skillsSchema = new Schema<TSkills>({
  title: { type: String, required: true },
  logo: { type: String, required: true },
});

export const Skill = model<TSkills>("Skill", skillsSchema);
