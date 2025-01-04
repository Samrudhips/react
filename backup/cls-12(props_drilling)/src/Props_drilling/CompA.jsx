import React from 'react'
import CompB from './CompB'

const CompA = () => {
    let name="Rahul"
  return (
    <div>
        <h3>Component-A</h3>
        <hr />
        <CompB Name={name}/>
    </div>
  )
}

export default CompA