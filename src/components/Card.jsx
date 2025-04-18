import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { edit, remove } from "../features/todos/todoSlice";

const Card = ({ todo }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  const handleEdit = (todo) => {
    dispatch(edit(todo));
  };

  return (
    <div className="relative p-4 rounded-md border shadow-sm">
      <h1 className="my-2 font-bold">{todo.title}</h1>
      <p className="my-2 text-gray-600"> {todo.description}</p>

      <div className="absolute top-3 right-3 flex space-x-3 items-center">
        <button onClick={() => handleEdit(todo)} className="text-yellow-500">
          <FaEdit />
        </button>
        <button onClick={() => handleRemove(todo._id)} className="text-red-500">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Card;
