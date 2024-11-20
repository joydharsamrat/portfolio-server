import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { projectServices } from "./projects.services";
import catchAsync from "../../utils/catchAsync";

const handleAddProject = catchAsync(async (req, res) => {
  const result = await projectServices.addProject(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project added successfully",
    data: result,
  });
});
const handleGetAllProjects = catchAsync(async (req, res) => {
  const result = await projectServices.getAllProjects();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Projects retrieved successfully",
    data: result,
  });
});
const handleGetSingleProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectServices.getSingleProject(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project retrieved successfully",
    data: result,
  });
});
const handleUpdateProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectServices.updateProject(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project updated successfully",
    data: result,
  });
});
const handleDeleteProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectServices.deleteProject(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project deleted successfully",
    data: result,
  });
});

export const projectControllers = {
  handleAddProject,
  handleGetAllProjects,
  handleGetSingleProject,
  handleUpdateProject,
  handleDeleteProject,
};
