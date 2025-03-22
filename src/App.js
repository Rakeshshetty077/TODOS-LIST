import "./App.css";
import { Header } from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { useEffect, useState } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("Deleting todo:", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    console.log("Adding todo:", title, desc);
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const newTodo = { sno, title, desc };
    setTodos([...todos, newTodo]);
  };

  return (
    <Router>
      <Header title="MyTodos-List" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
