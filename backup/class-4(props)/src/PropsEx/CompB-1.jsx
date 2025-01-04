let CompB=(props)=>{

    return  <div>
                <h3>Component B</h3>
                <pre>{JSON.stringify(props)}</pre>
                <h3>Employee_name={props.name}</h3>
                <h3>Employee_ID={props.id}</h3>
                <h3>Employee_location={props.loc}</h3>
            </div>
}

export default CompB