import React from "react";

const Search = (props) => {
  console.log(props.currentSortGenre);
  const setValue = () => {
    if (props.currentSortGenre && !props.isSearch) return "";
  };
  return (
    <label className="d-block mt-4 mb-4">
      <input
        value={setValue()}
        onChange={props.handleSearch}
        className="w-75 d-block form-control"
        type="search"
        placeholder="Search movie..."
        aria-label="Search"
      />
    </label>
  );
};

export default Search;
