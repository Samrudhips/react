import React from 'react'

const CompD = (props) => {
  return (
    <div>
        <h3>Component-D</h3>
        <pre>{JSON.stringify(props)}</pre>
        <hr/>
        <h4>Employee Name:{props.Name}</h4>
        <hr />
    </div>
  )
}

export default CompD