import React, { Component } from 'react'

export class Employee extends Component {
    emp={
        eid:101,
        ename:"Sonu",
        loc:["Wayanad","Madikeri","Bangalore"],
        address:{
            city:"Noida",
            Pin:12345

        }
    }
  render() {
    return<div>
        {/* <pre>{JSON.stringify(this.emp)}</pre> */}
        <h4>Employee_Id:{this.emp.eid}</h4>
        <h4>Emp Name:{this.emp.ename}</h4>
        <h4>Location:{this.emp.loc[1]}</h4>
        <h4>Address:{JSON.stringify(this.emp.address)}</h4>
        <h4>City:{this.emp.address.city}</h4>
        </div>
  }

}

export default Employee