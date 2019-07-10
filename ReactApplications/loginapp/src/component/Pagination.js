import React from "react";

const Pagination = ({ postsPerpage, totalPage, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPage / postsPerpage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="">
      <nav className="pagination_nav">
        <ul className="pagination  justify-content-center">
          {pageNumber.map(number => (
            <li key={number} className="page-item">
              <a onClick={paginate(number)} href="" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
