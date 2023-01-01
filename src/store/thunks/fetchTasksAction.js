import { CATEGORIES } from "../../helpers/categories";
import { createTodo } from "../../helpers/Todo";
import {
  fetchTasks,
  fetchTasksError,
  fetchTasksSuccess,
} from "../slices/tasks";

const timeout = new Promise((res) => setTimeout(res, 3000));

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const fetchTasksAction = () => async (dispatch, getState) => {
  try {
    if (getState().tasks.isLoading) {
      return;
    }

    dispatch(fetchTasks());

    await timeout;

    const res = await fetch(API_URL);
    const fetchedTasks = await res.json();

    const tasks = fetchedTasks.map((task, index) => {
      const category = index % 2 ? CATEGORIES.HIGH : CATEGORIES.LOW;
      return createTodo(task.title, category);
    });

    dispatch(fetchTasksSuccess(tasks));
  } catch (error) {
    dispatch(fetchTasksError(error.message));
  }
};

export { fetchTasksAction };
