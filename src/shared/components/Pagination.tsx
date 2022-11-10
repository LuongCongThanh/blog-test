import React from "react";

interface paginationProps {
  totalPage?: number;
  prevPage?: number;
  currentPage?: (data: number) => void;
}

const Pagination = (props: paginationProps) => {
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
        bg-blue-600 text-white"
        href="/"
      >
        1
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
