//Class Component
import React from 'react'
class Message extends React.Component{
   state={
    msg:"Hello"
   }
   //Instead of using 4 methods we can use one method and use bind method 
   updateHandler=(msgValue)=>{
    this.setState({msg:msgValue})
   }
    render(){
        return <div>
            <h3>Event Binding</h3>
            <h3>Message Value:{this.state.msg}</h3>
            <button onClick={this.updateHandler.bind(this,"Good Morning")}>GM</button>
            <hr />
            <button onClick={this.updateHandler.bind(this,"Good Afternon")}>GA</button>
            <hr />
            <button onClick={this.updateHandler.bind(this,"Good Evening")}>GE</button>
            <hr />
            <button onClick={this.updateHandler.bind(this,"Good Night")}>GN</button>
        </div>
        
    }
}
export default Message
