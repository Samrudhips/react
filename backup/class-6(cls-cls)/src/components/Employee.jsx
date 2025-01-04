
function Employee(props){
        return <div>
            <h1>Employee Component</h1>
            <hr/>
            <pre>User data:{JSON.stringify(props)}</pre>
            <hr />
            <h3>Name:{props.data.name}</h3>
            <hr />
            <h3>Location:{props.data.loc}</h3>
            <hr />
            <h3>Adress:{JSON.stringify(props.data.address)}</h3>
            <hr />
            <h3>Location:{props.data.address.city}</h3>

        </div>
    }

export default Employee