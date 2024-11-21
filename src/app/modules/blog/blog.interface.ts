export type TBlog = {
  title: string;
  slug: string;
  content: string;
  intro: string;
  tags?: string[];
  category?: string;
  coverImage?: string;
  isDeleted: boolean;
};
