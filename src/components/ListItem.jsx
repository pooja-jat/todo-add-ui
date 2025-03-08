import React from "react";

const ListItem = ({ todo, removeTodo }) => {
  return (
    <li className="list-group-item">
      <p>Id : {todo.id}</p>
      <h3>{todo.text}</h3>
      <span className="float-end">
        <button className="btn btn-sm btn-warning mx-1 rounded-0">Edit</button>
        <button
          onClick={() => removeTodo(todo.id)}
          className="btn btn-sm btn-danger rounded-0"
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
