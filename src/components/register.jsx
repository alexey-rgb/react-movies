import React, { Component } from "react";
import InputRegister from "./inputRegister";

class Register extends Component {
  state = {
    data: { username: "", password: "", name: "" },
    formErrors: {},
    emptyInput: { username: 0, password: 0, name: 0 },
  };

  validateField(fieldName, value) {
    const formErrors = this.state.formErrors;
    const errorMessage = "Please, fill out this field";
    const isValid = value.length > 0;
    isValid
      ? (formErrors[fieldName] = "")
      : (formErrors[fieldName] = errorMessage);
    return this.setState({ formErrors });
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const isValid = name;
    const emptyInput = this.state.emptyInput;
    const data = this.state.data;
    data[name] = value;
    if (value.length !== 0) {
      emptyInput[name] = 1;
      this.setState({ emptyInput });
    } else if (value.length === 0) {
      emptyInput[name] = 0;
    }
    this.setState({ data });
    this.setState({ isValid, emptyInput });
    this.validateField(name, value);
  };

  setDisabled = () => {
    let result = 0;
    Object.keys(this.state.emptyInput).forEach(
      (k) => (result += this.state.emptyInput[k])
    );
    return result === 3 ? false : true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  render() {
    const { data, formErrors, isValid, emptyInput, formValid } = this.state;
    console.log(this.state);
    return (
      <div className="ml-5">
        <h1>Register</h1>
        <form
          onSubmit={this.handleSubmit}
          style={{ display: "flex", flexDirection: "column", width: 400 }}
        >
          <InputRegister
            data={data}
            onChange={this.handleChange}
            formErrors={formErrors}
            isValid={isValid}
          />
          <div>
            <button disabled={this.setDisabled()} className="btn btn-primary">
              Done
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
