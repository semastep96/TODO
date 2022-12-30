import { configureStore } from "@reduxjs/toolkit";
import { logger } from "./middlewares/logger";
import { tasks } from "./reducers/tasks";

const store = configureStore({
  reducer: { tasks },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { store };
