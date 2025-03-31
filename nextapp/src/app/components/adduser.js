"use client";
import { useState } from "react";
import { addusers } from "../redux/slice";
import { useDispatch } from "react-redux";
export default function AddUser(params) {
  const [name, setName] = useState("");
  const dispatch= useDispatch()
  const userDispatch = () => {
    dispatch(addusers(name));

  };
  return (
    <>
      <div>List of user </div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Enter the name"
      ></input>
      <button onClick={userDispatch}>Save</button>
    </>
  );
}
