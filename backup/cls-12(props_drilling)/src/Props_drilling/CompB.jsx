import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
  return (
    <div>
        <h3>Component-B</h3>
        <pre>{JSON.stringify(props)}</pre>
        <hr/>
        <CompC Name={props.Name}/>
        
    </div>
  )
}

export default CompB