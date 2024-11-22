import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { skillsServices } from "./skills.services";

const handleAddSkill = catchAsync(async (req, res) => {
  const result = await skillsServices.addSkill(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill added successfully",
    data: result,
  });
});
const handleGetAllSkills = catchAsync(async (req, res) => {
  const result = await skillsServices.getSkills();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skills retrieved successfully",
    data: result,
  });
});
const handleUpdateSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await skillsServices.updateSkill(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill updated successfully",
    data: result,
  });
});

export const skillControllers = {
  handleAddSkill,
  handleGetAllSkills,
  handleUpdateSkill,
};
