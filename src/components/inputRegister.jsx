import React, { Component } from "react";
import FormError from "./formErrors";

class InputRegister extends Component {
  render() {
    const { data, onChange, formErrors, isValid } = this.props;
    const renderError = (curInput) => {
      return isValid === curInput ? (
        <FormError formErrors={formErrors} />
      ) : (
        false
      );
    };
    return Object.keys(data).map((input) => {
      return (
        <label>
          {input.replace(
            new RegExp(`${input[0]}`, "g"),
            input[0].toUpperCase()
          )}
          <input
            onChange={onChange}
            name={input}
            className="form-control"
            type={input !== "password" ? "text" : input}
          />
          {renderError(input)}
        </label>
      );
    });
  }
}

export default InputRegister;
