import React from "react";
import "./Category.css";
import PropTypes from "prop-types";
import { Input } from "./Input";
import { Item } from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { tasksSelector } from "../store/selectors";
import {
  addTask as addTaskAction,
  deleteTask as deleteTaskAction,
  toggleTask as toggleTaskAction,
} from "../store/actions/actions";

const Category = ({ name, placeholder }) => {
  const tasks = useSelector(tasksSelector).filter(
    (task) => task.category === name
  );
  const dispatch = useDispatch();

  function addTask(text) {
    dispatch(addTaskAction({ text, category: name }));
  }

  function toggleTask(id) {
    dispatch(toggleTaskAction(id));
  }

  function deleteTask(id) {
    dispatch(deleteTaskAction(id));
  }

  function orderTasks() {
    const workTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);

    return [...workTasks, ...doneTasks];
  }

  return (
    <div className="category">
      <div className="category-title">
        <h2>{name.toUpperCase()}</h2>
      </div>
      <Input placeholder={placeholder} addTask={addTask} />
      {orderTasks().map((task) => (
        <Item
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          key={task.id}
        />
      ))}
    </div>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export { Category };
