
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"



import {
  Card,
} from "@/components/ui/card"

function App() {
  return (
    <>
   <Card className="w-60 m-3 p-10 m-4" >
    {/* <CardContent className="flex flex-col items-center space-y-4" > */}

 <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
      
    </Avatar>
     <div className="text-center">
          <h2 className="text-lg font-medium">Jane Doe</h2>
          <p className="text-sm text-gray-500">jane@doe.com</p>
        </div>
        
    

    <Button variant="outline">Follow</Button>
    <Badge variant="destructive">expired</Badge>

    {/* </CardContent> */}

   


   </Card>
   
</>
  )
}

export default App