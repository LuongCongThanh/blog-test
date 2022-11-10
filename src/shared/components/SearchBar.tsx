import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Search = {
  txtSearch: string;
};

interface searchProps {
  onSubmit: (data: string) => void;
}

const SearchBar = (props: searchProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Search>({
    mode: "onSubmit"
  });
  const onSubmit: SubmitHandler<Search> = (data) => {
    props.onSubmit(data.txtSearch);
  };
  return (
    <form className="my-7" onSubmit={handleSubmit(onSubmit)}>
      <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Search</label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500"
          placeholder="Search"
          {...register("txtSearch", { required: true })}
        />
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
      {errors.txtSearch && <span className="mt-2 block text-sm font-medium text-red-500">This field is required</span>}
    </form>
  );
};

export default SearchBar;
