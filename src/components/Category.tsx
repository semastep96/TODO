import React from "react";
import "./Category.css";
import { Input } from "./Input";
import { Item } from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { tasksSelector } from "../store/selectors";
import {
  addTask as addTaskAction,
  deleteTask as deleteTaskAction,
  toggleTask as toggleTaskAction,
} from "../store/slices/tasks";
import { createTodo, TODO } from "../helpers/Todo";

interface CategoryProps {
  name: string;
  placeholder: string;
}

const Category = ({ name, placeholder }: CategoryProps) => {
  const loadingMessage = "Loading more todos...";
  const tasks = useSelector(tasksSelector).todos.filter(
    (task) => task.category === name
  );
  const { isLoading, error } = useSelector(tasksSelector);

  const dispatch = useDispatch();

  function addTask(text: string): void {
    dispatch(addTaskAction(createTodo(text, name)));
  }

  function toggleTask(id: string): void {
    dispatch(toggleTaskAction(id));
  }

  function deleteTask(id: string): void {
    dispatch(deleteTaskAction(id));
  }

  function orderTasks(): TODO[] {
    const workTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);

    return [...workTasks, ...doneTasks];
  }

  if (error) {
    alert(error);
  }

  return (
    <div className="category">
      <div className="category-title">
        <h2>{name.toUpperCase()}</h2>
      </div>
      <Input placeholder={placeholder} addTask={addTask} />
      {isLoading ? loadingMessage : null}
      {orderTasks().map((task): React.ReactElement => (
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

export { Category };
