import React from 'react'
import CompD from './CompD'

const CompC = (props) => {
  return (
    <div>
        <h3>Component-C</h3>
        <pre>{JSON.stringify(props)}</pre>
        <hr/>
        <CompD Name={props.Name}/>
    </div>
    
  )
}

export default CompC