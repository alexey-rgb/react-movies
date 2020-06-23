import React, { Component } from "react";

export default class FormError extends Component {
  render() {
    let message = null;
    const errors = Object.keys(this.props.formErrors),
      { formErrors: error } = this.props;

    errors.map((key) => {
      if (error[key].length > 0) {
        message = <p className="alert-warning">{error[key]}</p>;
      }
    });
    return message;
  }
}
