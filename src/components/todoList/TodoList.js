import { useState } from "react";
import "./styles.css";
import { v4 as uuid } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleInput(e) {
    if (e.target.value !== "") setInput(e.target.value);
  }

  function addTask() {
    if (input.trim() !== "") setTodos([...todos, { id: uuid(), text: input }]);
    setInput("");
  }

  function deleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") addTask();
  }

  return (
    <div className="todo-container">
      <div className="todo-list">
        {todos.map((todo) => (
          <ul key={todo.id}>
            <li>
              {todo.text}
              <button
                onClick={() => deleteTask(todo.id)}
                className="todo-delete"
              >
                Delete
              </button>
            </li>
          </ul>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="New Todo"
        className="todo-input"
      />
      <button onClick={addTask} className="todo-btn">
        Add Task
      </button>
    </div>
  );
}
