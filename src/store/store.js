import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { logger } from "./middlewares/logger";
import { reducer } from "./reducers/reducer";

const store = createStore(reducer, applyMiddleware(thunk, logger));

export { store };
