import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const addBlog = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};
const getAllBlogs = async () => {
  const result = await Blog.find({ isDeleted: false });
  return result;
};
const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};
const updateBlog = async (id: string, payload: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate(
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
const deleteBlog = async (id: string) => {
  await Blog.findByIdAndUpdate(
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

export const blogServices = {
  addBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
