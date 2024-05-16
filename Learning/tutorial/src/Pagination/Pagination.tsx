import React from "react";
import { usePagination, DOTS } from "./usePagination";

interface Props {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const Pagination: React.FC<Props> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage <= 0 || paginationRange.length <= 1) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul className="pagination">
      <li onClick={onPrevious}>Prev</li>
      {paginationRange.map((pageNumber, index) => (
        <li
          key={index}
          onClick={() => onPageChange(pageNumber)}
          className={`pagination__item ${
            pageNumber === currentPage ? "active" : ""
          }`}
        >
          {pageNumber === DOTS ? "..." : pageNumber}
        </li>
      ))}
      <li onClick={onNext}>Next</li>
    </ul>
  );
};

export default Pagination;
