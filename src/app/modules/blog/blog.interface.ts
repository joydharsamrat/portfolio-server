import { Types } from "mongoose";

export type TBlog = {
  title: string;
  slug: string;
  content: string;
  intro: string;
  tags?: string[];
  category?: Types.ObjectId;
  coverImage?: string;
  isDeleted: boolean;
};
