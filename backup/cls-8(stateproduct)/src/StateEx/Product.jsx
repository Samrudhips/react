import React from 'react';
class Message extends React.Component{
    // msg="Hello"
    state={
        qty:1
    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty+1})
       
    }
    
    decrHandler=()=>{
        this.setState({qty:this.state.qty-1})
    }
    
    render(){
        console.log("First render method")
        return <div>
            <h3>Product Component</h3>
            <h3>Product Quantity:{this.state.qty}</h3>
            <button onClick={this.incrHandler}>Incr</button>
            <button onClick={this.decrHandler}>Decr</button>
            
           
           
        </div>
    }
}
export default Message