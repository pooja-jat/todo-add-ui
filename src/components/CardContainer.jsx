import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const CardContainer = () => {
  const { allTodos } = useSelector((state) => state.todos);

  return (
    <div className="my-4 border rounded-md p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {allTodos.map((todo) => (
        <Card key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default CardContainer;
