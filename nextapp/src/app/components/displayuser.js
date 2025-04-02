"use client"
import { useSelector } from "react-redux"

export default function DisplayUser(params) {
  const userData= useSelector((state)=>state.users)  
  return (
    <>
      <div>List of user </div>
      {userData && userData.map((item)=>{
        return (<li>{item.name}</li>)
      })}
    </>
  );
}
