import { RootState } from "./store";

const tasksSelector = (state: RootState) => state.tasks;

export { tasksSelector };
