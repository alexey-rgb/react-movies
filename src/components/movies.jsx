import React, { Component } from "react";
import MoviesTable from "./table/movies-table";
import ListGroup from "./list-group";
import Pagination from "./pagination";
import Search from "./searchMovie";
import { getMovies } from "../services/fakeMovieService";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    moviesData: getMovies(),
    isAsc: false,
    currentSortTitle: "Title",
    currentSortGenre: null,
    moviesPerPage: 4,
    currentPage: 1,
    currentHeartId: null,
    heartCondition: {},
    isSearch: false,
  };

  onDelete = (movieDescs, currenyId) => {
    const moviesData = movieDescs.filter((desc) => desc._id !== currenyId);
    this.setState({ moviesData });
  };

  onSortByColumnTitle = (moviesDescs, type) => {
    const currentSortTitle = document
      .getElementById(type.label)
      .getAttribute("id");
    const moviesData = moviesDescs.sort((a, b) => {
      let comparizon = 0;
      if (type.descType === "title") {
        this.state.isAsc === true
          ? (comparizon = a[type.descType].localeCompare(b[type.descType]))
          : (comparizon = b[type.descType].localeCompare(a[type.descType]));
      } else if (
        type.descType === "numberInStock" ||
        type.descType === "dailyRentalRate"
      ) {
        return this.state.isAsc === true
          ? a[type.descType] - b[type.descType]
          : b[type.descType] - a[type.descType];
      } else if (typeof a[type.descType] === "object") {
        this.state.isAsc === true
          ? (comparizon = a.genre.name.localeCompare(b.genre.name))
          : (comparizon = b.genre.name.localeCompare(a.genre.name));
      }
      return comparizon;
    });

    this.setState({
      moviesData,
      isAsc: !this.state.isAsc,
      currentSortTitle,
    });
  };

  onSortByGenre = (type) => {
    const copyData = getMovies();
    const isSearch = !this.state.isSearch;
    const movies = copyData.filter((md) => md.genre.name === type);
    type === "All Movies"
      ? this.setState({
          currentSortGenre: type,
          moviesData: copyData,
          isSearch,
        })
      : this.setState({ currentSortGenre: type, moviesData: movies, isSearch });
  };

  onSliceMoviesPerPage = (currentPage, count) => {
    this.state.moviesData.slice(
      (count - 1) * 4,
      (count - 1) * 4 + this.state.moviesPerPage
    );

    return this.setState({
      currentPage: count,
    });
  };

  moviesCounter = (moviesDesc) => {
    if (moviesDesc.length === 0) return "There is no films in the database";
    return `There is ${moviesDesc.length} films in the database`;
  };

  handleHeart = (title) => {
    const heartCondition = this.state.heartCondition;

    this.state.heartCondition[title] === true
      ? (heartCondition[title] = false)
      : (heartCondition[title] = true);
    this.setState({ heartCondition });
  };

  handleSearch = (e) => {
    const value = e.currentTarget.value;
    const isSearch = this.state.isSearch === false ? true : true;
    const currentSortGenre = null;
    const moviesData = getMovies().filter((mD) =>
      new RegExp(`${value}`, "i").test(mD.title.substring(0, value.length))
    );
    this.setState({ isSearch, moviesData, currentSortGenre });
  };

  render() {
    const {
      moviesData,
      isAsc,
      currentSortTitle,
      currentSortGenre,
      moviesPerPage,
      currentPage,
      currentHeartId,
      heartCondition,
      isSearch,
    } = this.state;

    console.log(currentSortGenre);

    const sliceMoviesData =
      moviesData.length > 3
        ? moviesData.slice(
            (currentPage - 1) * 4,
            (currentPage - 1) * 4 + moviesPerPage
          )
        : moviesData;

    return (
      <React.Fragment>
        <div style={{ flexWrap: "nowrap" }} class="row">
          <div
            style={{ flexBasis: 250, minWidth: 150, maxWidth: 150 }}
            class="col-sm"
          >
            <ListGroup
              onSortByGenre={this.onSortByGenre}
              currentSortGenre={currentSortGenre}
              isSearch={isSearch}
            />
          </div>
          <div class="col-sm">
            <Link to="/movieForm/new">
              {
                <button className="btn btn-primary d-block mb-3">
                  ADD MOVIE
                </button>
              }
            </Link>
            <Search
              handleSearch={this.handleSearch}
              currentSortGenre={currentSortGenre}
              isSearch={isSearch}
            />
            {(React.createElement("h1"), null, this.moviesCounter(moviesData))}
            <MoviesTable
              sliceMoviesData={sliceMoviesData}
              onSort={this.onSortByColumnTitle}
              onDelete={this.onDelete}
              isAsc={isAsc}
              currentSortTitle={currentSortTitle}
              allMovies={moviesData}
              handleHeart={this.handleHeart}
              currentHeartId={currentHeartId}
              heartCondition={heartCondition}
            />
          </div>
        </div>
        <Pagination
          moviesData={moviesData}
          renderMovies={this.onSliceMoviesPerPage}
          currentPage={currentPage}
          moviesPerPage={moviesPerPage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
