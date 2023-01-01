import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  todos: [],
};

const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    fetchTasks: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchTasksError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchTasksSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.isLoaded = true;
      state.todos = [...state.todos, ...action.payload];
    },
    addTask: (state, action) => {
      state.todos.unshift(action.payload);
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      state.todos = state.todos.map((task) => {
        if (task.id === action.payload) {
          return { ...task, ...{ done: !task.done } };
        }
        return task;
      });
    },
  },
});

const { actions, reducer } = tasks;

export const {
  fetchTasks,
  fetchTasksError,
  fetchTasksSuccess,
  addTask,
  deleteTask,
  toggleTask,
} = actions;

const tasksReducer = reducer;

export default tasksReducer;