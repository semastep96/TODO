import React from "react";
import { TODO } from "../helpers/Todo";
import "./Item.css";

interface ItemProps {
  task: TODO;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const Item: React.FC<ItemProps> = ({ task, toggleTask, deleteTask }) => {
  const onToggle: React.MouseEventHandler<HTMLDivElement> = () => {
    toggleTask(task.id);
  };
  const onDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
    deleteTask(task.id);
  };
  return (
    <div className={task.done ? "item done" : "item"}>
      <div className="indicator" onClick={onToggle}></div>
      <div className="text">{task.text}</div>
      <button className="deleteBtn" onClick={onDelete}>
        <div className="icon">+</div>
      </button>
    </div>
  );
};

export { Item };
