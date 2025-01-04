import React from 'react'

const ContactList = (props) => {
  let buddySelector=(user)=>{
    console.log(user.name.first);
    

  }
  return (
    <div>
        <h3>ContactList</h3>
        {/* <pre>{JSON.stringify(props)}</pre> */}
        <table className='table border={2}'>
            <thead className='bg-primary text-white'>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            </tr>
            </thead>
            <tbody>
            {
                //contacts is array[],contact is object{}
                props.contacts.map((contact,index)=>{
                    return <tr key={index} onClick={buddySelector.bind(null,contact)}>
                    {/* list rendering */}
                    <td>{contact.name.first}</td>
                    <td>{contact.email}</td>
                    <td>{contact.location.city}</td>

                    </tr>

                })
            }

            </tbody>
        </table>
    </div>
  )
}

export default ContactList