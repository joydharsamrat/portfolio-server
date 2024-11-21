import { model, Schema, UpdateQuery } from "mongoose";
import { TBlog } from "./blog.interface";
import slugify from "slugify";

const BlogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    content: { type: String, required: true },
    intro: { type: String, required: true },
    tags: { type: [String] },
    category: { type: Schema.ObjectId, ref: "Category" },
    coverImage: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

BlogSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true, strict: true });

  next();
});

BlogSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate() as UpdateQuery<TBlog>;

  if (update.$set && update.$set.title) {
    update.$set.slug = slugify(update.$set.title, {
      lower: true,
      strict: true,
    });
  }

  next();
});

export const Blog = model<TBlog>("Blog", BlogSchema);
