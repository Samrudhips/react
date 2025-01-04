import React from 'react'
class Message extends React.Component{
    constructor(props){
        super(props)
        console.log("First constructor method");
       
    }
    componentDidMount(){
        console.log("Third component Did Mount");
        
    }
    incrHandler(){}
    decrHandler(){}
    render(){
        console.log("Second render method");
        return <div>
            <h3>Message Component</h3>
        </div>
        
    }
}
export default Message
