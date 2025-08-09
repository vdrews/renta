// import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import user from "../assets/user.svg"
import { AlignLeft } from 'lucide-react';
import { Input } from "@/components/ui/input";

import { ChevronDown } from 'lucide-react';

const NavBar = () => {
  return (
   <>

   
   <div className="flex items-center gap-x-6  h-[4rem] p-2 ">
     <AlignLeft className="text-pink-500"/>
    
        <input type="text" name='search' id='search' placeholder='search'
        className="ml-4 bg-gray-100 rounded-sm max-w-l w-[38rem] h-[2rem] text-sm font-semibold text-gray-400  border-gray-500 p-2"/>
   
     <div className="relative w-16 h-16 p-1 flex items-center gap-x-1">
 <Avatar className=" h-8 w-8 object-cover  ring-2 ring-pink-500 shadow-xl/30 ring-offset-2 ring-offset-white  ">

  <AvatarImage src={user} className="object-cover"/>
  <AvatarFallback>img</AvatarFallback>
</Avatar>

 <ChevronDown className="text-[#adadad] w-4 h-4 mt-4"/>
     </div>


   </div>


<div className="grid grid-cols-[200px_auto] bg-zinc-300 rounded-lg m-4 ">
  
    <div className=""><img src={user} alt="housng img" className="h-50 rounded-lg  p-4 "/></div>
    {/* // need to hace a fall back square - empty container that says choose img */}
    
    <div className=" p-4 overflow-auto max-h-50">
      <h1>Owner: Kenny Smith</h1>
      <h2>Addi: Tavi </h2>
      <h2>Costs: $4 </h2>
      <p>notes: <Input placeholder="lorem"/> </p>
    
    </div>
    
    </div>
   {/* to be components  */}

   <div className="grid grid-cols-[200px_auto] bg-zinc-300 rounded-lg m-4 ">
  
    <div className=""><img src={user} alt="housng img" className="h-50 rounded-lg  p-4 "/></div>
    {/* // need to hace a fall back square - empty container that says choose img */}
    
    <div className=" p-4 overflow-auto max-h-50">
      <h1>Owner: Kenny Smith</h1>
      <h2>Addi: Tavi </h2>
      <h2>Costs: $4 </h2>
      <p>notes: <Input placeholder="lorem"/> </p>
    
    </div>
    
    </div>
   
   <div className="grid grid-cols-[200px_auto] bg-zinc-300 rounded-lg m-4 ">
  
    <div className=""><img src={user} alt="housng img" className="h-50 rounded-lg  p-4 "/></div>
    {/* // need to hace a fall back square - empty container that says choose img */}
    
    <div className=" p-4 overflow-auto max-h-50">
      <h1>Owner: Kenny Smith</h1>
      <h2>Addi: Tavi </h2>
      <h2>Costs: $4 </h2>
      <p>notes: <Input placeholder="lorem"/> </p>
    
    </div>
    
    </div>
   </>
  )
}

export default NavBar