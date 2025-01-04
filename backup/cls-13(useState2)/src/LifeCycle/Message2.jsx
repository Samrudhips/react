import React from 'react'
class Message extends React.Component{
   state={
    msg:"Hello"
   }
   gmHandler=()=>{
    this.setState({msg:"GM"})
   }
   gaHandler=()=>{
    this.setState({msg:"GA"})
   }
   geHandler=()=>{
    this.setState({msg:"GE"})
   }
   gnHandler=()=>{
    this.setState({msg:"GN"})
   }
    render(){
        return <div>
            <h3>Message Component</h3>
            <h3>Message Value:{this.state.msg}</h3>
            <button onClick={this.gmHandler}>GM</button>
            <hr />
            <button onClick={this.gaHandler}>GA</button>
            <hr />
            <button onClick={this.geHandler}>GE</button>
            <hr />
            <button onClick={this.gnHandler}>GN</button>
        </div>
        
    }
}
export default Message
