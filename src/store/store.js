import { configureStore } from "@reduxjs/toolkit";
import { logger } from "./middlewares/logger";
import { reducer } from "./reducers/reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});

export { store };
