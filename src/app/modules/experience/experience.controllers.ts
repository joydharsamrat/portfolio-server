import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { experienceServices } from "./experience.service";

const handleAddExperience = catchAsync(async (req, res) => {
  const result = await experienceServices.addExperience(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience added successfully",
    data: result,
  });
});

const handleGetAllExperiences = catchAsync(async (req, res) => {
  const result = await experienceServices.getAllExperiences();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experiences retrieved successfully",
    data: result,
  });
});
const handleGetSingleExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await experienceServices.getSingleExperience(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience retrieved successfully",
    data: result,
  });
});
const handleUpdateExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await experienceServices.updateExperience(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience updated successfully",
    data: result,
  });
});
const handleDeleteExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await experienceServices.deleteExperience(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience deleted successfully",
    data: result,
  });
});

export const experienceControllers = {
  handleAddExperience,
  handleGetAllExperiences,
  handleGetSingleExperience,
  handleUpdateExperience,
  handleDeleteExperience,
};
