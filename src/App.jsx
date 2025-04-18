import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import CardContainer from "./components/CardContainer";


const App = () => {
  const [todos, setTodos] = useState([]);

  const [edit, setEdit] = useState({
    todo: {},
    isEdit: false,
  });

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const addTodo = (text) => {
    setTodos([
      {
        id: crypto.randomUUID(),
        text: text,
      },
      ...todos,
    ]);
  };

  const editTodo = (oldTodo) => {
    setEdit({
      todo: oldTodo,
      isEdit: true,
    });
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((item) => (item.id === id ? { id: id, text: newText } : item))
    );

    setEdit({ todo: {}, isEdit: false });
  };

  return (
    <>
      <Navbar />
      <div className="p-10">
      <Form />
      <CardContainer/>
      </div>
     
    </>
  );
};

export default App;
