import React from 'react'
class Message extends React.Component{
    msg="Good Morning"
    price=700
    colors=["red","blue"]
    emp={
        eid:101,
        ename:"Rahul"
    }
    render(){
        return <div>
        <h3> Message:{this.msg}</h3>
        <h3> Price:{this.price}</h3>
        <h3> Colors:{this.colors[1]}</h3>
        <h3> Employee data:{JSON.stringify(this.emp)}</h3>
        {/* array indexing */}
        </div>
    }
}
export default Message
