import React from "react";
import "./App.css";
import { Category } from "./components/Category";
import { CATEGORIES } from "./helpers/categories";

function App() {
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
