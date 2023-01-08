import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { CATEGORIES } from "../../helpers/categories";
import { createTodo } from "../../helpers/Todo";
import {
  fetchTasks,
  fetchTasksError,
  fetchTasksSuccess,
} from "../slices/tasks";
import { RootState } from "../store";

const timeout = new Promise((res) => setTimeout(res, 3000));

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const fetchTasksAction =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch, getState) => {
      try {
        if (getState().tasks.isLoading) {
          return;
        }

        dispatch(fetchTasks());

        await timeout;

        const res = await fetch(API_URL);
        const fetchedTasks = await res.json();

        const tasks = fetchedTasks.map(
          (task: { title: string }, index: number) => {
            const category = index % 2 ? CATEGORIES.HIGH : CATEGORIES.LOW;
            return createTodo(task.title, category);
          }
        );

        dispatch(fetchTasksSuccess(tasks));
      } catch (e) {
        dispatch(fetchTasksError("Can't get todos"));
      }
    };

export { fetchTasksAction };
