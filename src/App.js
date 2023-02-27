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

  return (
    <div className="App">
      <label>
        <input value={txt} onChange={(e) => setTxt(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </label>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" />
            <span>{todo.txt} </span>
            <span className="times">&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
