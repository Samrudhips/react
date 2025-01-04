//Functional Component Event Binding
import { useState } from "react"
const Message=()=>{
   let[msg,setMsg]=useState("Hello")
   //Instead of using 4 methods we can use one method and use bind method 
   let updateHandler=(msgValue)=>{
    setMsg(msgValue)
   }
    
        return <div>
            <h3>Event Binding</h3>
            <h3>Message Value:{msg}</h3>
            <button onClick={updateHandler.bind(null,"Good Morning")}>GM</button>
            <button onClick={updateHandler.bind(null,"Good Afternoon")}>GA</button>
            <button onClick={updateHandler.bind(null,"Good Evening")}>GE</button>
            <button onClick={updateHandler.bind(null,"Good Night")}>GN</button>
            
        </div>
        
    }
export default Message
