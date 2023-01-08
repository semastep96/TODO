import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TODO } from "../../helpers/Todo";

interface TasksState {
  isLoading: boolean;
  error: null | string;
  todos: TODO[];
}

const initialState: TasksState = {
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
    fetchTasksError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchTasksSuccess: (state, action: PayloadAction<TODO[]>) => {
      state.isLoading = false;
      state.error = null;
      state.todos = [...state.todos, ...action.payload];
    },
    addTask: (state, action: PayloadAction<TODO>) => {
      state.todos.unshift(action.payload);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((task) => {
        if (task.id === action.payload) {
          return { ...task, done: !task.done };
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
