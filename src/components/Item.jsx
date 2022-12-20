import React from "react";
import PropTypes from "prop-types";
import "./Item.css";

const Item = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className={task.done ? "item done" : "item"}>
      <div className="indicator" onClick={() => toggleTask(task.id)}></div>
      <div className="text">{task.text}</div>
      <button className="deleteBtn" onClick={() => deleteTask(task.id)}>
        <div className="icon">+</div>
      </button>
    </div>
  );
};

Item.propTypes = {
  task: PropTypes.object.isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export { Item };
