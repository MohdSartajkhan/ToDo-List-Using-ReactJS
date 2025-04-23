import React, { useState } from "react";
import "./Todos.css";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { text: input, done: false }]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const markDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = true;
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="todo-container">
      <h2>📝 My Todo List</h2>

      <input
        className="search-bar"
        type="text"
        placeholder="🔍 Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="todo-inputs">
        <input
          className="add-input"
          type="text"
          placeholder="✍️ Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-btn" onClick={addTodo}>
          ➕
        </button>
      </div>

      <ul className="todo-list">
        {filteredTodos.map((todo, index) => (
          <li
            key={index}
            className={`todo-item ${todo.done ? "done" : ""}`}
          >
            <span>{todo.text}</span>

            <div className="todo-actions">
              {!todo.done && (
                <button
                  className="tick-btn"
                  onClick={() => markDone(index)}
                >
                  ✅
                </button>
              )}

              <button
                className="del-btn"
                onClick={() => deleteTodo(index)}
              >
                ❌
              </button>
              <button
                className="clear-all-btn"
                onClick={() => {
                  localStorage.removeItem("todos");
                  window.location.reload();
                }}
              >
                🗑️ Clear All Tasks
              </button>

              {todo.done && <span className="done-heart">💖 Done!</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
