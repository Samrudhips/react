import React from 'react'
class CompB extends React.Component{
    render(){

    return  <div>
                <h3>Component B</h3>
                <pre>{JSON.stringify(this.props)}</pre>
                <h3>Employee_name={this.props.name}</h3>
                <h3>Employee_ID={this.props.id}</h3>
                <h3>Employee_location={this.props.loc}</h3>
            </div>
}
}
export default CompB