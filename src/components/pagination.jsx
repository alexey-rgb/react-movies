import React, { Component } from "react";

const Pagination = ({
  moviesData,
  renderMovies,
  currentPage,
  moviesPerPage,
}) => {
  const style = { display: "flex", marginLeft: 70 };

  const createPageNumber = (number, active) =>
    React.createElement(
      "div",
      {
        className: `paginate m-2 ${active}`,
        onClick: () => renderMovies(currentPage, number),
      },
      `${number}`
    );

  const renderPagination = (data, curPage) => {
    let calculatePagesCount = Math.ceil(data.length / moviesPerPage);
    let pageAr = [],
      activeClass = "btn-primary";
    for (let i = 1; i <= calculatePagesCount; i++) {
      if (curPage === i) {
        pageAr.push(createPageNumber(i, activeClass));
      } else {
        pageAr.push(createPageNumber(i));
      }
    }
    return pageAr.map((num) => num);
  };
  return (
    <div style={style}>
      {moviesData.length < 5 ? null : renderPagination(moviesData, currentPage)}
    </div>
  );
};

export default Pagination;
