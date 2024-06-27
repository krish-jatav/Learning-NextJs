"use client"

import { useState } from "react";

export default function Home() {
 const [name,setName] =useState("krish")
 const[notUpdate,setNotUpdate]=useState("true")
//  const user = ()=>{
//     setName("krish")
//     setNotUpdate("off")
//  }

  return (
    <main className=" bg-white flex min-h-screen flex-col items-center justify-between p-24">
<div>

  <div className="flex justify-center py-40 ">
  <button className=" bg-black h-8 w-20 rounded-lg" onClick={()=> setNotUpdate(!notUpdate)}>Click</button></div>{notUpdate &&(
    <h1 className="text-black text-5xl">Hello {name} bhai</h1>
  )}

</div>
    </main>
  );
}
