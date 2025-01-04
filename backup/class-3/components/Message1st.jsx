import React, { Fragment } from "react"
let Message1st=()=>{
    let msg="Hi there"
    let price=200
    let colors=["red","blue","black"]
    let emp={
        eid:101,
        ename:"Rahul"
    }
    return <React.Fragment>
        {/* can use just Fragment also */}
    <h3>Message Component</h3>
    <h3> Message:{msg}</h3>
    <h3>Price:{price}</h3>
    <h3>Colors:{colors}</h3>
    <h3>Employee details:{JSON.stringify(emp)}</h3>
</React.Fragment>
}
export default Message1st
{/* // return<div>
//         <h3>Message Component</h3>
//         <h3> Message:{msg}</h3>
//         <h3>Price:{price}</h3>
//         <h3>Colors:{colors}</h3>
//     </div> */}

