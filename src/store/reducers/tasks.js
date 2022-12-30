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

const tasks = createReducer(initialState, (builder) => {
  builder
    .addCase(FETCH_TASKS, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(FETCH_TASKS_ERROR, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
    .addCase(FETCH_TASKS_SUCCESS, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.todos = [...state.todos, ...action.payload];
    })
    .addCase(ADD_TASK, (state, action) => {
      state.todos.unshift(action.payload);
    })
    .addCase(DELETE_TASK, (state, action) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload.id);
    })
    .addCase(TOGGLE_TASK, (state, action) => {
      state.todos = state.todos.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, ...{ done: !task.done } };
        }
        return task;
      });
    });
});

export { tasks };
