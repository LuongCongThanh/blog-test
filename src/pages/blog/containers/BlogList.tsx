import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { blogActions, list } from "../blogSlice";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../../shared/components/SearchBar";
import SelectOption from "../../../shared/components/SelectOption";

const BlogList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const data = useAppSelector(list);
  const options = [
    { key: 1, value: "", label: "Choose data field" },
    { key: 2, value: "id", label: "ID" },
    { key: 3, value: "title", label: "Title" },
    { key: 4, value: "content", label: "Content" },
    { key: 5, value: "created_at", label: "Time create Blogs" },
    { key: 6, value: "updated_at", label: "Time update Blogs" }
  ];
  const sortDirection = [
    { key: 1, value: "", label: "Choose data field" },
    { key: 2, value: "asc", label: "asc" },
    { key: 3, value: "desc", label: "desc" }
  ];
  useEffect(() => {
    dispatch(blogActions.getBlogList({ page: 1, offset: 20 }));
  }, []);
  const searchBlogList = (data: string) => {
    if (data) {
      dispatch(blogActions.getBlogList({ search: data }));
    }
  };
  const sortByBlogList = (value: string) => {
    if (value) {
      dispatch(blogActions.getBlogList({ sort_by: value }));
    }
  };
  const sortDirectionBlog = (value: string) => {
    if (value) {
      dispatch(blogActions.getBlogList({ sort_direction: value }));
    }
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog</h2>
        </div>
        <SelectOption onchange={sortDirectionBlog} option={sortDirection} nameSort="Sort by field" />
        <SelectOption onchange={sortByBlogList} option={options} nameSort="Sort Direction" />
        <SearchBar onSubmit={searchBlogList} />
        <button
          type="button"
          className="mr-2 mb-2 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
          onClick={() => {
            navigate(`/create-blog`);
          }}
        >
          Create Blog
        </button>
        {data ? (
          <div className="flex flex-wrap">
            {data.map((item: any) => (
              <div
                className="my-4 flex w-full flex-col items-center overflow-hidden rounded-lg border md:flex-row"
                key={item.id}
              >
                <div className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                  <img
                    src={item.image.url}
                    alt={item.image.url}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col gap-2 p-4 lg:p-6">
                  <span className="text-sm text-gray-400">{item.created_at}</span>
                  <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                  <p className="text-gray-500">{item.content}</p>
                  <div>
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                      <button
                        type="button"
                        className="m-4 rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                        onClick={() => {
                          navigate(`/blog-detail/${item.id}`);
                        }}
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="m-4 rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                        onClick={() => {
                          navigate(`/edit-blog/${item.id}`, {
                            state: {
                              item
                            }
                          });
                        }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="m-4 rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                        onClick={() => dispatch(blogActions.removeBlog(item.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">No Data</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
