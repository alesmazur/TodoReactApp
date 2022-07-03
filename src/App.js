import PropTypes from "prop-types";
import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";
import Context from "./Context";

function App() {
  const [todos, setTodos] = React.useState([]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }

        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="todo__app">
        <h1 className="app__title">My to Do List </h1>

        <TodoForm onCreate={addTodo} />

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <h2>
            {" "}
            <br></br>Nothing to do ...
          </h2>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
