import { CATEGORIES } from "../../helpers/categories";
import {
  fetchTasks,
  fetchTasksError,
  fetchTasksSuccess,
} from "../actions/actions";

const timeout = new Promise((res) => setTimeout(res, 3000));

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const fetchTasksAction = () => async (dispatch, getState) => {
  try {
    dispatch(fetchTasks());

    await timeout;

    const res = await fetch(API_URL);
    const fetchedTasks = await res.json();

    const tasks = fetchedTasks.map((task, index) => ({
      id: task.title + index,
      text: task.title,
      done: false,
      category: index % 2 ? CATEGORIES.HIGH : CATEGORIES.LOW,
    }));

    const stateTodosId = getState().tasks.todos.map((todo) => todo.id);
    const isUniqueTask = (task) => !stateTodosId.includes(task.id);
    const uniqueTasks = tasks.filter(isUniqueTask);

    dispatch(fetchTasksSuccess(uniqueTasks));
  } catch (error) {
    dispatch(fetchTasksError(error.message));
  }
};

export { fetchTasksAction };
