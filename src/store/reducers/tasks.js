import {
  ADD_TASK,
  DELETE_TASK,
  FETCH_TASKS,
  FETCH_TASKS_ERROR,
  FETCH_TASKS_SUCCESS,
  // FETCH_TASKS,
  TOGGLE_TASK,
} from "../actions/actionTypes";

const initialState = { isLoading: false, error: null, todos: [] };

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return { ...state, ...{ isLoading: true, error: null } };
    case FETCH_TASKS_ERROR:
      return { ...state, ...{ isLoading: false, error: action.payload } };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        ...{
          isLoading: false,
          error: null,
          todos: todos(state.todos, action),
        },
      };
    default:
      return {
        ...state,
        ...{
          todos: todos(state.todos, action),
        },
      };
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [action.payload, ...state];

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);

    case TOGGLE_TASK:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, ...{ done: !task.done } };
        }
        return task;
      });
    case FETCH_TASKS_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export { tasks };
