import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogActions, detailBlog } from "../blogSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const details: any = useAppSelector(detailBlog);

  useEffect(() => {
    dispatch(blogActions.getBlogDetail(Number(id)));
  }, [id]);
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog Detail</h2>
        </div>
        <div className="flex flex-wrap">
          <div className="flex h-96 w-full flex-col items-center overflow-hidden rounded-lg border md:flex-row">
            <div className="w- group relative block h-48  shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-2/6">
              <img
                src={details?.image?.url}
                loading="lazy"
                alt="avatar"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col gap-2 p-4 lg:p-6">
              <span className="text-sm text-gray-400">{`Time create : ${details?.created_at}`}</span>
              <span className="text-sm text-gray-400">{`Time update : ${details?.created_at}`}</span>
              <h2 className="text-xl font-bold text-gray-800">{details?.title}</h2>
              <p className="text-gray-500">{details?.content}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate("/blog-list")}
          className="group relative mt-7 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
        >
          <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
            Back to Home
          </span>
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
