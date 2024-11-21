import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { categoryServices } from "./category.services";

const handleAddCategory = catchAsync(async (req, res) => {
  const result = await categoryServices.addCategory(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category added successfully",
    data: result,
  });
});
const handleGetAllCategories = catchAsync(async (req, res) => {
  const result = await categoryServices.getAllCategories();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Categories retrieved successfully",
    data: result,
  });
});
const handleGetSingleCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.getSingleCategory(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category retrieved successfully",
    data: result,
  });
});
const handleUpdateCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.updateCategory(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category updated successfully",
    data: result,
  });
});
const handleDeleteCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.deleteCategory(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category deleted successfully",
    data: result,
  });
});

export const categoryControllers = {
  handleAddCategory,
  handleGetAllCategories,
  handleGetSingleCategory,
  handleUpdateCategory,
  handleDeleteCategory,
};
