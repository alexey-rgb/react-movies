import React from "react";

export const getInputs = (
  inputsTitle,
  lastId,
  handler,
  data,
  error,
  propsDataMovie
) => {
  const renderError = (title) => {
    return error && data[title] ? (
      <div className="mt-2 alert-warning">{error}</div>
    ) : (
      ""
    );
  };

  const setValue = (title) => {
    if (propsDataMovie !== "" && title !== "genre")
      return propsDataMovie[title];
    else if (title === "genre" && propsDataMovie !== "")
      return propsDataMovie.genre.name;
  };

  const renderSelect = (title) => {
    if (title === "genre") {
      return (
        <div class="form-group">
          <label htmlFor="genre">Genre</label>
          <select
            onChange={(event) => handler(event, lastId)}
            name="genre"
            class="form-control"
            id="genre"
            value={setValue(title)}
          >
            <option></option>
            <option>Action</option>
            <option>Thriller</option>
            <option>Comedy</option>
          </select>
          {renderError(title)}
        </div>
      );
    } else {
      return (
        <div class="form-group">
          <label htmlFor={title}>
            {title.replace(
              new RegExp(`${title[0]}`, "i"),
              title[0].toUpperCase()
            )}
          </label>
          <input
            value={setValue(title)}
            onChange={(event) => handler(event, lastId)}
            type={title}
            class="form-control"
            id={title}
            name={title.replace(
              new RegExp(`${title[0]}`, "i"),
              title[0].toLowerCase()
            )}
          />
          {renderError(title)}
        </div>
      );
    }
  };

  return inputsTitle.map((title) => {
    return renderSelect(title);
  });
};
