import React,{Component} from 'react'
import Axios from 'axios'
class Users extends React.Component{
    state;
    constructor(props){
        super(props)
        this.state={users:[]}
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            this.setState({users:resp.data})

        })
        .catch(()=>{

        })
    }
    render(){
        return(
            <div>
    <pre>{JSON.stringify(this.state.users)}</pre>
    {
        this.state.users.length > 0 ? 
        <>
        <table border={2}>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>City</th>
            </thead>
            <tbody>
            {
                this.state.users.map((user)=>{
                    return <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.address.city}</td>
                            </tr>
                })
            }
            </tbody>
        </table>
        </> : <>No Data</>
    }
  </div>
)
}
}

export default Users