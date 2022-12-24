import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./actionTypes";

const addTask = ({ text, category }) => {
  const id = text + new Date() + Math.random();
  return {
    type: ADD_TASK,
    payload: { id, text, category, done: false },
  };
};
const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: { id },
  };
};
const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    payload: { id },
  };
};

export { addTask, deleteTask, toggleTask };
