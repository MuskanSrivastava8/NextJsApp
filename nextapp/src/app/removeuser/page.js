"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeusers } from "../redux/slice";

export default function RemoveUser(params) {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <>
      <div>Remove user</div>
      {userData &&
        userData.map((item) => {
          return (
            <li>
              {item.name}
              <button
                onClick={() => {
                  dispatch(removeusers(item.id));
                }}
              >
                remove
              </button>
            </li>
          );
        })}
    </>
  );
}
