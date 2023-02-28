import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [txt, setTxt] = useState("");

  function addTodo() {
    if (txt.trim().length)
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          txt,
          completed: false,
        },
      ]);
    setTxt("");
  }

  function deleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div className="App">
      <div className="globalApp">
        <label>
          <input
            className="inputStyle"
            placeholder="Place for Ur Todos"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
          />
          <button className="buttonAdd" onClick={addTodo}>
            Add Todo
          </button>
        </label>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" />
              <span>{todo.txt} </span>
              <span className="times" onClick={() => deleteTodo(todo.id)}>
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
