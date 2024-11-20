import { TExperience } from "./experience.interface";
import { Experience } from "./exprience.model";

const addExperience = async (payload: TExperience) => {
  const result = await Experience.create(payload);
  return result;
};

const getAllExperiences = async () => {
  const result = await Experience.find({ isDeleted: false });
  return result;
};
const getSingleExperience = async (id: string) => {
  const result = await Experience.findById(id);
  return result;
};
const updateExperience = async (id: string, payload: Partial<TExperience>) => {
  const result = await Experience.findByIdAndUpdate(
    id,
    {
      $set: {
        ...payload,
      },
    },
    { new: true }
  );
  return result;
};
const deleteExperience = async (id: string) => {
  await Experience.findByIdAndUpdate(
    id,
    {
      $set: {
        isDeleted: true,
      },
    },
    { new: true }
  );
  return null;
};

export const experienceServices = {
  addExperience,
  getAllExperiences,
  getSingleExperience,
  updateExperience,
  deleteExperience,
};
