import React from "react";
import PropTypes from "prop-types";
import "./Item.css";

const Item = ({ text, done }) => {
  return (
    <div className={done ? "item done" : "item"}>
      <div className={"indicator"}></div>
      <div className="text">{text}</div>
      <button className="deleteBtn">
        <div className="icon">+</div>
      </button>
    </div>
  );
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export { Item };
