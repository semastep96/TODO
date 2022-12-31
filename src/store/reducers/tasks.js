import { createReducer } from "@reduxjs/toolkit";
import {
  ADD_TASK,
  DELETE_TASK,
  FETCH_TASKS,
  FETCH_TASKS_ERROR,
  FETCH_TASKS_SUCCESS,
  TOGGLE_TASK,
} from "../actions/actionTypes";

const initialState = { isLoading: false, error: null, todos: [] };

const tasks = createReducer(initialState, {
  [FETCH_TASKS]: (state) => {
    state.isLoading = true;
    state.error = null;
  },
  [FETCH_TASKS_ERROR]: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },
  [FETCH_TASKS_SUCCESS]: (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.todos = [...state.todos, ...action.payload];
  },
  [ADD_TASK]: (state, action) => {
    state.todos.unshift(action.payload);
  },
  [DELETE_TASK]: (state, action) => {
    state.todos = state.todos.filter((task) => task.id !== action.payload.id);
  },
  [TOGGLE_TASK]: (state, action) => {
    state.todos = state.todos.map((task) => {
      if (task.id === action.payload.id) {
        return { ...task, ...{ done: !task.done } };
      }
      return task;
    });
  },
});

export { tasks };
