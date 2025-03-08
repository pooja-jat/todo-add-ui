import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({ todos, removeTodo }) => {
  return (
    <ul className="list-group my-4">
      {todos.map((todo) => {
        return <ListItem key={todo.id} todo={todo} removeTodo={removeTodo} />;
      })}
    </ul>
  );
};

export default ListGroup;
