import React, { Component } from "react";
import TableBody from "./table-body";
import TableHead from "./table-head";
import Like from "./like";

class MoviesTable extends Component {
  state = {
    rowsData: [
      { descType: "title", label: "Title" },
      { descType: "genre", label: "Genre" },
      { descType: "numberInStock", label: "Stock" },
      { descType: "dailyRentalRate", label: "Rate" },
      {
        likeEl: (title) => {
          return (
            <Like
              handleHeart={this.props.handleHeart}
              title={title}
              currentHeartId={this.props.currentHeartId}
              heartCondition={this.props.heartCondition}
            />
          );
        },
      },
      {
        element: (currenyId, allMovies) => {
          return (
            <button
              onClick={() => this.props.onDelete(allMovies, currenyId)}
              className="btn btn-warning"
            >
              Delete
            </button>
          );
        },
      },
    ],
  };

  render() {
    const {
      sliceMoviesData,
      onSort,
      onDelete,
      isAsc,
      currentSortTitle,
      allMovies,
    } = this.props;
    const { rowsData } = this.state;

    return (
      <React.Fragment>
        <table class="table">
          <TableHead
            rowData={rowsData}
            onSort={onSort}
            moviesData={allMovies}
            isAsc={isAsc}
            currentSortTitle={currentSortTitle}
          />
          <TableBody
            moviesData={sliceMoviesData}
            rowsData={rowsData}
            allMovies={allMovies}
            isAsc={isAsc}
          />
        </table>
      </React.Fragment>
    );
  }
}

export default MoviesTable;
