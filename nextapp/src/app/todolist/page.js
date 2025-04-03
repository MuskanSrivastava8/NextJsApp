"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask } from "../redux/todoSlice";

export default function Todolist() {
  const [list, setList] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todolist.todolist);
  console.log("data", data);
  return (
    <>
      <input
        type="text"
        placeholder="Enter the task"
        onChange={(e) => {
          setList(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch(addtask(list));
        }}
      >
        add
      </button>
      <h1>List</h1>
      {data.map((i) => {
        return <li>{i.name}</li>;
      })}
    </>
  );
}
