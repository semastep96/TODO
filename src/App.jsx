import React from "react";
import "./App.css";
import { Category } from "./components/Category";

function App() {
  return (
    <div className="App">
      <Category name="High" placeholder="Добавить очень важных дел"/>
      <Category name="Low" placeholder="Добавить дел"/>
    </div>
  );
}

export default App;
