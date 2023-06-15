import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <div className="flex w-full m-4 " key={i}>
            <div
              className={`pagination__item w-8 h-8 bg-gray-300  text-center flex rounded-sm justify-center items-center ${
                currentPage === i ? "active" : ""
              }`}
              onClick={() => onPageChange(i)}
            >
              <div>{i}</div>
            </div>
          </div>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="w-8 h-8 bg-gray-300  text-center flex rounded-sm justify-center items-center"
        disabled={currentPage < 1 ? true : false}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <AiOutlineLeft />
      </button>
      <ul className="pagination flex">{renderPageNumbers()}</ul>
      <button
        className="w-8 h-8 bg-gray-300  text-center flex rounded-sm justify-center items-center"
        disabled={currentPage > totalPages-1? true : false}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default Pagination;
