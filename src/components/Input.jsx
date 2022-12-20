import React from "react";
import "./Input.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Input = ({ placeholder, addTask }) => {
  const [text, setText] = useState("");
  const onInput = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    addTask(text);
    setText("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        className="input"
        value={text}
        onChange={onInput}
      />
      <button type="submit" className="button">
        +
      </button>
    </form>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  addTask: PropTypes.func.isRequired,
};

export { Input };
