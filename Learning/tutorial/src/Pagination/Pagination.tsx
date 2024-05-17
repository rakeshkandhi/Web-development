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
    onPageChange(currentPage < paginationRange.length ? currentPage + 1 : currentPage);
  };

  const onPrevious = () => {
    onPageChange(currentPage > 1 ? currentPage - 1 : 1);
  };

  return (
    <ul className="pagination">
      <li onClick={onPrevious} aria-disabled={currentPage === 1}>Prev</li>
      {paginationRange.map((pageNumber, index) => (
        <li key={index} onClick={() => onPageChange(pageNumber)}>
          {pageNumber === DOTS ? "..." : pageNumber}
        </li>
      ))}
      <li onClick={onNext} aria-disabled={currentPage === paginationRange.length}>Next</li>
    </ul>
  );
};

export default Pagination;
