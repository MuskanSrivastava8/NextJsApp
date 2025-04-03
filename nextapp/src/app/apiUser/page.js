"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserApi } from "../redux/slice";
import { useEffect } from "react";

export default function APIUser() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userData.userapidata);
  console.log(data);
  useEffect(() => {
    dispatch(fetchUserApi());
  });
  return (
    <>
      <h1>List</h1>
      <br/>
      <br/>
      {data.map((i) => {
        return <li>{i.name} </li>;
      })}
    </>
  );
}
