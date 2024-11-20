import { TProject } from "./project.interface";
import Project from "./projects.model";

const addProject = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};
const getAllProjects = async () => {
  const result = await Project.find({ isDeleted: false });
  return result;
};
const getSingleProject = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};
const updateProject = async (id: string, payload: Partial<TProject>) => {
  const result = await Project.findByIdAndUpdate(
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
const deleteProject = async (id: string) => {
  await Project.findByIdAndUpdate(
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

export const projectServices = {
  addProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
