import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddBlogPayload, Inputs } from "../../../shared/types/blog.typpe";
import { useAppDispatch } from "../../../store/store";
import { useLocation, useNavigate } from "react-router-dom";
import { blogActions } from "../blogSlice";

const BlogCreate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isAddMode = location?.state?.item;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    isAddMode ? updateUser(isAddMode.id, data) : createUser(data);
  };

  const createUser = (data: AddBlogPayload) => {
    dispatch(blogActions.addBlog(data));
    navigate(`/blog-list`);
  };
  const updateUser = (id: number, blog: {}) => {
    // @ts-ignore
    dispatch(blogActions.editBlog({ id, blog }));
    navigate(`/blog-detail/${id}`);
  };
  useEffect(() => {
    if (isAddMode) {
      setValue("title", isAddMode.title, { shouldValidate: true });
      setValue("content", isAddMode.content, { shouldValidate: true });
      setValue("image", isAddMode.image.url, { shouldValidate: true });
    }
  }, [isAddMode]);

  return (
    <div className="p-10">
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          {isAddMode ? "Edit Blog" : "Add Blog"}
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-900">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            placeholder="Title"
            {...register("title", { required: true })}
          />
          {errors.title && <span className="mb-2 block text-sm font-medium text-red-500">This field is required</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="featuredImage" className="mb-2 block text-sm font-medium text-gray-900 ">
            Image
          </label>
          <input
            type="text"
            id="featuredImage"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            placeholder="Url image"
            {...register("image", { required: true })}
          />
        </div>
        <div className="mb-6">
          <div>
            <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-900">
              Description
            </label>
            <textarea
              id="description"
              rows={10}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              placeholder="Your description..."
              {...register("content", { required: true })}
            />
            {errors.content && (
              <span className="mb-2 block text-sm font-medium text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <div>
          <button
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
            type="submit"
          >
            <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
              {isAddMode ? "Edit Blog" : "Add Blog"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogCreate;
