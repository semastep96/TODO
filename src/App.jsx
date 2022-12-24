import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Category } from "./components/Category";
import { CATEGORIES } from "./helpers/categories";
import { fetchTasksAction } from "./store/thunks/fetchTasksAction";

function App() {
  const dispatch = useDispatch();
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
