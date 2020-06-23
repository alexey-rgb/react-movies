/* import React from "react";

const InputForm = (props) => {
  const { value, handleChange, name, type, style, error, label } = props;
  return (
    <div className={style[1]}>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={handleChange}
        autoFocus
        //ref={this.username}
        name={name}
        id={name}
        type={type}
        className={style[0]}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default InputForm; */

import React from "react";

const InputForm = (props) => {
  const { style, name, error, label, ...rest } = props;
  return (
    <div className={style[1]}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        //ref={this.username}
        id={name}
        className={style[0]}
        {...rest}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default InputForm;
