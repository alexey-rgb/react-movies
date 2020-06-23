import React, { Component } from "react";

const ListGroup = (props) => {
  const { onSortByGenre, currentSortGenre } = props;
  const genres = ["All Movies", "Action", "Thriller", "Comedy"];

  return (
    <div class="list-group">
      {genres.map((type) => {
        return (
          <a
            onClick={() => onSortByGenre(type)}
            href="#"
            className={
              currentSortGenre !== type
                ? "list-group-item"
                : "list-group-item active"
            }
          >
            {type}
          </a>
        );
      })}
    </div>
  );
};

export default ListGroup;
