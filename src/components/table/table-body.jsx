import React from "react";
import { Link, Redirect } from "react-router-dom";

const TableBody = ({ moviesData, rowsData, allMovies }) => {
  const definedTypeEl = (movieDesc, rowData) => {
    const defineKey = () => {
      return rowData.descType === "genre"
        ? movieDesc.genre.name
        : movieDesc[rowData.descType];
    };

    return rowData.element
      ? rowData.element(movieDesc._id, allMovies)
      : rowData.likeEl
      ? rowData.likeEl(movieDesc.title)
      : defineKey();
  };

  return (
    <tbody>
      {moviesData.map((data) => {
        return (
          <tr>
            {rowsData.map((d) => {
              return d.descType === "title" ? (
                <td>
                  {/*  <Link to={`/moviesForm/${data["_id"]}`}>
                    {definedTypeEl(data, d)}
                  </Link> */}
                  <Link
                    to={{
                      pathname: `/movieForm/new/${data._id}`,
                      propsSearch: { data },
                    }}
                  >
                {/*     <Redirect
                      from={`/movieForm/new/${data._id}`}
                      exact
                      to={`/movieForm/${data._id}`}
                    /> */}
                    {definedTypeEl(data, d)}
                  </Link>
                </td>
              ) : (
                <td>{definedTypeEl(data, d)}</td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
