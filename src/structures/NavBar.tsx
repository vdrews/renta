
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import user from "../assets/user.svg"
import { AlignLeft } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import HouseBar from "./HouseBar";

  

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

<HouseBar/>






   {/* to be components  */}

     </>
  )
}

export default NavBar


// notes : the display should be editable  on click so no forms - click and ten you can change it without moving off screen 
// create an add screen -- form + change these out to cards -- display 