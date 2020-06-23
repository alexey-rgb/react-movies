import React from "react";

const MoviesForm = ({ match, history }) => {
  console.log(match.params);
  return (
    <div>
      <h1>Movie id: {match.params.id}</h1>
      <button
        onClick={() => history.push("/movies")}
        className="btn btn-primary mt-3"
      >
        Save
      </button>
    </div>
  );
};

export default MoviesForm;
