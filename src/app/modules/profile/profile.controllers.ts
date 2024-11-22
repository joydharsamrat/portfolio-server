import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { profileServices } from "./profile.services";

const handleGetProfile = catchAsync(async (req, res) => {
  const result = await profileServices.getProfile();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Profile retrieved successfully",
    data: result,
  });
});
const handleUpdateProfile = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await profileServices.updateProfile(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Profile updated successfully",
    data: result,
  });
});

export const profileControllers = {
  handleGetProfile,
  handleUpdateProfile,
};
