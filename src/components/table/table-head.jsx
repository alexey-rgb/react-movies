import React, { Component } from "react";

const TableHead = ({
  rowData,
  onSort,
  moviesData,
  isAsc,
  currentSortTitle: id,
}) => {
  const renderArrowIcon = (type) => {
    if (type.label === id) {
      return isAsc === true && id === type.label ? (
        <i style={{ marginLeft: 10 }} class="fas fa-angle-down"></i>
      ) : (
        <i style={{ marginLeft: 10 }} class="fas fa-angle-up"></i>
      );
    }
  };

  return (
    <thead>
      <tr>
        {rowData.map((type) => {
          return (
            <th id={type.label} onClick={() => onSort(moviesData, type)}>
              {type.label}
              {renderArrowIcon(type)}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
