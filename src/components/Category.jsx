import React from "react";
import "./Category.css";
import PropTypes from "prop-types";
import { Input } from "./Input";
import { Item } from "./Item";
import { useState } from "react";

const Category = ({ name, placeholder }) => {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const id = text + new Date() + Math.random();
    setTasks([...tasks, { id, text, done: false }]);
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          task.done = !task.done;
        }
        return task;
      })
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
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
