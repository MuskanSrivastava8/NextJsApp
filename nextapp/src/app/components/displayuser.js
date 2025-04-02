"use client"
import { useSelector } from "react-redux"

export default function DisplayUser(params) {
  const userDatares= useSelector((state)=>state.userData.users)  
  console.log(userDatares)

  return (
    <>
      <div>List of user </div>
      {userDatares && userDatares.map((item)=>{
        return (<li>{item.name}</li>)
      })}
    </>
  );
}
