import React from "react";
import { addMovie } from "../services/fakeMovieService";
import { getMovies } from "../services/fakeMovieService";
import { getInputs } from "./util/getInputs";
import { getButton } from "./util/getButton";

class MovieForm extends React.Component {
  state = {
    currentId: null,
    inputsTitle: ["title", "numberInStock", "dailyRentalRate", "genre"],
    data: {},
    newMovie: {},
    error: null,
    isDisable: true,
    currentValue: null,
    propsDataMovie: null,
    flag: false,
  };

  validate = (name, value) => {
    let result;
    switch (name) {
      case "title":
        result =
          value === "" || value.length > 100 ? "min 1, max 100 symbols" : false;
        break;
      case "numberInStock":
        result =
          value <= 0 || value > 10 || value.length === 0 || Number.isNaN(+value)
            ? "number from 1 to 10"
            : false;
        break;
      case "dailyRentalRate":
        result =
          value <= 0 || value > 10 || value.length === 0 || Number.isNaN(+value)
            ? "number from 1 to 10"
            : false;
        break;
    }

    return result;
  };

  handleChange = (e, id_proto) => {
    let value = e.currentTarget.value,
      currentValue = value;
    const name = e.currentTarget.name,
      currentId = id_proto + 1,
      newMovie = this.state.newMovie,
      data = this.state.data,
      error = this.validate(name, value);

    if (name === "genre") value = { name: value };
    !this.state.currentId
      ? (newMovie._id = currentId) && (newMovie[name] = value)
      : (newMovie[name] = value);

    if (error) {
      data[name] = true;
      this.setState({ error, data });
    } else {
      data[name] = false;
      this.setState({ data });
    }

    this.setState({ newMovie, currentId, currentValue, flag: true });
  };

  handleSubmit = (e, movie) => {
    e.preventDefault();
    addMovie(movie);
    this.props.history.push("/movies");
  };

  render() {
    const moviesDesc = getMovies(),
      lastId = moviesDesc[moviesDesc.length - 1]._id,
      { inputsTitle, newMovie, data, error, currentValue, flag } = this.state,
      handler = this.handleChange,
      inputsCondition = Object.values(data),
      nodeName = "Save",
      eventName = "submit",
      buttonArg = [nodeName, eventName, inputsCondition, currentValue],
      propsDataMovie =
        this.props.location.propsSearch === undefined
          ? ""
          : this.props.location.propsSearch.data,
      inputData = [
        inputsTitle,
        lastId,
        handler,
        data,
        error,
        propsDataMovie,
        flag,
      ];

    return (
      <div className="ml-3">
        <h1>MovieForm</h1>
        <form
          method="submit"
          onSubmit={(e) => this.handleSubmit(e, newMovie)}
          className="w-75"
        >
          {getInputs(...inputData)}

          <div>{getButton(...buttonArg)}</div>
        </form>
      </div>
    );
  }
}

export default MovieForm;
