import React from 'react';

/**
 * Pagination component to control the page view
 * @param {number} currentPage 
 * @param {function} handlePageChange 
 * @param {number} totalPages 
 */
const Pagination = ({ currentPage, handlePageChange, totalPages }) => {

  const handlePageChangeInternal = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      handlePageChange(newPage);
    }
  };

  return (
    <div className="pagination-container">
      <button onClick={() => handlePageChangeInternal(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span> Page {currentPage} of {totalPages} </span>
      <button onClick={() => handlePageChangeInternal(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
