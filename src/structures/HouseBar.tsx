

import user from "../assets/user.svg"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const HouseBar = () => {

  

  return (
   <>

<Card  className="grid gap-0 grid-cols-[200px_auto] bg-zinc-300 rounded-lg m-4">
  
  
      <div className="p-3"><img src={user} alt="housng img" className="rounded-lg  "/></div>
      {/* // need to hace a fall back square - empty container that says choose img */}
  
 
  
  
      <CardContent >
      


         <div className="flex flex-col gap-1">

           <div className="flex items-center gap-1">
    <Label htmlFor="owner" className="w-24">Owner</Label>
    <Input
      type="text"
      id="owner"
      placeholder="e.g., Jeffery Miller "
  
    />
    </div>
 <div className="flex items-center gap-1">
    <Label htmlFor="address" className="w-24">Address</Label>
    <Input
      type="text"
      id="address"
      placeholder="e.g., Constant Spring"
    />
    </div>
     <div className="flex items-center gap-1">
    <Label htmlFor="cost" className="w-24">Cost</Label>
    <Input
      type="text"
      id="cost"
      placeholder="e.g., 4 Mil"
  
    />
    </div>
     <div className="flex items-center gap-1">
    <Label htmlFor="notes" className="w-24">Notes</Label>
    <Textarea
      
      id="notes"
      placeholder="e.g., The place noisy"
  
    />
    </div>



    
         </div>
    </CardContent>
 
  
      
</Card>




   {/* to be components  */}

     </>
  )
}

export default HouseBar


// notes : the display should be editable  on click so no forms - click and ten you can change it without moving off screen 
// create an add screen -- form + change these out to cards -- display 