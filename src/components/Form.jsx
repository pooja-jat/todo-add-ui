import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "../features/todos/todoSlice";

const Form = () => {
  const { edit } = useSelector((state) => state.todos);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    !edit.isEdit
      ? dispatch(
          add({
            _id: crypto.randomUUID(),
            title,
            description,
          })
        )
      : dispatch(
          update({
            _id: edit.todo._id,
            title,
            description,
          })
        );

    setTitle("");
    setDescription("");
  };
  
  useEffect(() => {
    setTitle(edit.todo.title);
    setDescription(edit.todo.description);
  }, [edit]);

  return (
    <div className=" border p-5">
      <h1 className="my-4 text-center font-bold text-2xl">Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          className="border w-full my-2 p-2 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
          className="border w-full my-2 p-2 rounded-md"
        ></textarea>
        <button
          type="submit"
          className="bg-emerald-600 py-2 w-full rounded-md text-semibold text-white"
        >
          Save
        </button>
      </form>
    </div>
  );
};
export default Form;
