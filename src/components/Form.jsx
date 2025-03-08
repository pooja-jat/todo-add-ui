import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Any Text Here"
        className="form-control rounded-0"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button className="btn btn-success my-2 w-100 rounded-0">
        Save Todo
      </button>
    </form>
  );
};

export default Form;
