import React from "react";

const Pagination = ({ postPerPage, toalPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(toalPage / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} herf="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
