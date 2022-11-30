import React from "react";
import "./Input.css";
import PropTypes from "prop-types";

const Input = ({ placeholder }) => {
  return (
    <form className="form">
      <input type="text" placeholder={placeholder} className="input" />
      <button type="submit" className="button">+</button>
    </form>
  );
};

Input.propTypes = { placeholder: PropTypes.string.isRequired };

export { Input };
