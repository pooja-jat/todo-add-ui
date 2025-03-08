import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [todos, setTodos] = useState([{ id: 1, text: "Code Everyday" }]);

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const addTodo = (text) => {
    setTodos([{ id: crypto.randomUUID(), text: text }, ...todos]);
  };

  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Form addTodo={addTodo} />
        <ListGroup todos={todos} removeTodo={removeTodo} />
      </div>
    </>
  );
};

export default App;
