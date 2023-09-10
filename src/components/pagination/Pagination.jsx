import React, { useState, useEffect } from "react";
import style from "./Pagination.module.scss";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePageNumberClick = (pageNumber) => {
    setCurrentIndex(Math.max(pageNumber - 4, 0));
    onPageChange(pageNumber);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 7, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 7, pageNumbers.length - 1)
    );
  };

  const visiblePageNumbers = pageNumbers.slice(
    currentIndex,
    currentIndex + 7
  );

  return (
    <div className={style.pagination}>
      <button
        className={currentPage === 1 ? style.disabled : ""}
        onClick={() => handlePageNumberClick(1)}
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        className={currentIndex === 0 ? style.disabled : ""}
        onClick={handlePrevClick}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      {visiblePageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={pageNumber === currentPage ? style.active : ""}
          onClick={() => handlePageNumberClick(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className={currentIndex >= pageNumbers.length - 3 ? style.disabled : ""}
        onClick={handleNextClick}
        disabled={currentIndex >= pageNumbers.length - 3}
      >
        &gt;
      </button>
      <button
        className={currentPage === totalPages ? style.disabled : ""}
        onClick={() => handlePageNumberClick(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
