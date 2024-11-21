import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const addCategory = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};
const getAllCategories = async () => {
  const result = await Category.find({ isDeleted: false });
  return result;
};
const getSingleCategory = async (id: string) => {
  const result = await Category.findById(id);
  return result;
};
const updateCategory = async (id: string, payload: Partial<TCategory>) => {
  const result = await Category.findByIdAndUpdate(
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
const deleteCategory = async (id: string) => {
  await Category.findByIdAndUpdate(
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

export const categoryServices = {
  addCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
