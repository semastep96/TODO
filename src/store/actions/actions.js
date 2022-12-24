import {
  ADD_TASK,
  DELETE_TASK,
  FETCH_TASKS,
  FETCH_TASKS_ERROR,
  FETCH_TASKS_SUCCESS,
  TOGGLE_TASK,
} from "./actionTypes";

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
const fetchTasks = () => {
  return {
    type: FETCH_TASKS,
  };
};
const fetchTasksSuccess = (payload) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload,
  };
};
const fetchTasksError = (payload) => {
  return {
    type: FETCH_TASKS_ERROR,
    payload,
  };
};

export {
  addTask,
  deleteTask,
  toggleTask,
  fetchTasks,
  fetchTasksSuccess,
  fetchTasksError,
};
