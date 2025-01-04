import Employee from './Employee'
let User=()=>{
    let userName="Rahul"
    let availability=true
    let salary=45000.45
    let User_Data={
          name:"Samrudhi",
          loc:["Wayanad"," New-Delhi"],
          address:{
            city:"Manali",
            Pincode:465782
        }

    }
   
        return <div>
            <h1>User Component</h1>
            <Employee data={User_Data}/>

        </div>
    }

export default User