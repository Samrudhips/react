// Form Handling-controlled using event and uncontrolled
//uncontrolled using dom
import React, { useState } from 'react'

const Reg = () => {
    let [user,setUser]=useState({uName:"",email:"",mob:""})
    let uNameHandler=(event)=>{
      //updating state
        setUser({...user,uName:event.target.value})
    }

    let emailHandler=(event)=>{
        setUser({...user,email:event.target.value})
    }

    let mobileHandler=(event)=>{
        setUser({...user,mob:event.target.value})
    }
    

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
            <input name="uName" type="text" placeholder='UserName' onChange={uNameHandler}/>
            <br />
            <label>Email ID:::::</label>
            <input name="email" type="text"  placeholder='Email' onChange={emailHandler} />
            <br />
            <label>MobileNo::</label>
            <input name="mob" type="tel" placeholder='Mobile No' onChange={mobileHandler} />
            <br />
            <input type='submit' value={"Login"}/>

        </form>
    </div>
  )
}

export default Reg