import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { logger } from "./middlewares/logger";
import tasksReducer from "./slices/tasks";

const reducer = combineReducers({
  tasks: tasksReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { store };
