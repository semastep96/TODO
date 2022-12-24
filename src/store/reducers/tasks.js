import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "../actions/actionTypes";

const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    case TOGGLE_TASK:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, ...{ done: !task.done } };
        }
        return task;
      });
    default:
      return state;
  }
};

export { tasks };
