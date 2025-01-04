import React from 'react';
class Message extends React.Component{
    // msg="Hello"
    state={
        msg:"Hello"
    }
    gmHandler=()=>{
        this.setState({msg:"GM"})
        console.log("Inside GM Handler")
    }
    
    gnHandler=()=>{
        this.setState({msg:"GN"})
    }
    
    render(){
        console.log("Test Case 123 Cm")
        return <div>
            <h3>Message Component</h3>
            <h3>Value:{this.state.msg}</h3>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
            
           
           
        </div>
    }
}
export default Message