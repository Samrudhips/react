// Form Handling-controlled using event and uncontrolled
//uncontrolled using dom
import React, { useState } from 'react'

const Login = () => {
    let [user,setUser]=useState({uName:"",uPassword:""})
    let uNameHandler=(event)=>{
        //form sending event object
        // setUser({uName:"Rajni"}),test case
        setUser({...user,uName:event.target.value})
        // ...user=extracting user properties

    }
    let uPasswordHandler=(event)=>{
        // setUser({uPassword:"1234"})
        setUser({...user,uPassword:event.target.value})


    }
    let submitHandler=(event)=>{
        //To prevent html default behaviour
        event.preventDefault()//to check in console uname and password values
        console.log(user);
        

    }
  return (
    <div>
    <br />
    <pre>{JSON.stringify(user)}</pre>
    <br />
         <h3>Login Details</h3>
         <form onSubmit={submitHandler}>
            <label>Username:</label>
            <input type="text" onChange={uNameHandler}/>
            <br />
            <label>Password::</label>
            <input type="passsord" onChange={uPasswordHandler} />
            <br />
            <input type='submit' value={"Login"}/>

        </form>
    </div>
  )
}

export default Login