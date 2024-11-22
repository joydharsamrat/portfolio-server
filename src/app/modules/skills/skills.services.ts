import { TSkills } from "./skills.interface";
import { Skill } from "./skills.model";

const addSkill = async (payload: TSkills) => {
  const result = await Skill.create(payload);
  return result;
};

const getSkills = async () => {
  const result = await Skill.find();
  return result;
};

const updateSkill = async (id: string, payload: Partial<TSkills>) => {
  const result = await Skill.findByIdAndUpdate(id, {
    $set: {
      ...payload,
    },
  });
  return result;
};

export const skillsServices = {
  addSkill,
  getSkills,
  updateSkill,
};
