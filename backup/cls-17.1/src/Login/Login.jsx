// Form Handling-controlled using event and uncontrolled
//uncontrolled using dom
import React, { useState } from 'react'

const Login = () => {
    let [user,setUser]=useState({uName:"",uPassword:""})
    let updateHandler=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    //using one handler using name based on the input field 
    let submitHandler=(event)=>{
        event.preventDefault()
        console.log(user);
        
    }

    
    //name attribute to identify the input box
  return (
    <div>
    <br />
    <pre>{JSON.stringify(user)}</pre>
    <br />
         <h3>Login Details</h3>
         <form onSubmit={submitHandler}>
            <label>Username:</label>
            <input name="uName" type="text" onChange={updateHandler}/>
            <br />
            <label>Password::</label>
            <input name="uPassword" type="passsord" onChange={updateHandler} />
            <br />
            <input type='submit' value={"Login"}/>

        </form>
    </div>
  )
}

export default Login
