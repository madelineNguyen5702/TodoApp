
import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import InputTodo from "./components/InputTodo";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App m-5">
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default App;
