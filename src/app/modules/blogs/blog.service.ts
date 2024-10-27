import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogIntoDB = async (payload: TBlog) => {
    const result = await Blog.create(payload);
    return result;
};

const getAllBlogsFromDB = async () => {
    const result = await Blog.find({ isDeleted: false });
    return result;
};

const updateBlogIntoDB = async (
    id: string,
    payload: Partial<TBlog>,
  ) => {
    const result = await Blog.findOneAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
      },
    );
    return result;
  };

  const deleteBlogFromDB = async (id: string) => {
    const result = await Blog.findByIdAndUpdate(
      id,
      { isDeleted: true },
      {
        new: true,
      },
    );
    return result;
  };

export const BlogServices = {
    createBlogIntoDB,
    getAllBlogsFromDB,
    // getSingleFacilityFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB
  };