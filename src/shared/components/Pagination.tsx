import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center space-x-2 pt-12">
      <a
        className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300
        text-blue-500 hover:bg-blue-500 hover:text-white"
        href="/"
      >
        &lt;
      </a>
      <a
        className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300
        text-blue-500 hover:bg-blue-500 hover:text-white"
        href="/"
      >
        1
      </a>
      <a
        className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300
        text-blue-500 hover:bg-blue-500 hover:text-white"
        href="/"
      >
        2
      </a>

      <a
        className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-600
        bg-blue-600 text-white"
        href="/"
      >
        3
      </a>

      <a
        className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300
        text-blue-500 hover:bg-blue-500 hover:text-white"
        href="/"
      >
        4
      </a>
      <a
        className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300
        text-blue-500 hover:bg-blue-500 hover:text-white"
        href="/"
      >
        5
      </a>
      <a
        className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300
        text-blue-500 hover:bg-blue-500 hover:text-white"
        href="/"
      >
        &gt;
      </a>
    </div>
  );
};

export default Pagination;
