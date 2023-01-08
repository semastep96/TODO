import React from "react";
import { useEffect } from "react";
import "./App.css";
import { Category } from "./components/Category";
import { CATEGORIES } from "./helpers/categories";
import { useAppDispatch } from "./store/hook";
import { fetchTasksAction } from "./store/thunks/fetchTasksAction";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTasksAction());
  }, []);
  return (
    <div className="App">
      <Category
        name={CATEGORIES.HIGH}
        placeholder="Добавить очень важных дел"
      />
      <Category name={CATEGORIES.LOW} placeholder="Добавить дел" />
    </div>
  );
}

export default App;
