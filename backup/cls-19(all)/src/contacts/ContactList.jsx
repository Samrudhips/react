import React from 'react'

const ContactList = (props) => {
  return (
    <div>
        <h3>ContactList</h3>
        {/* <pre>{JSON.stringify(props)}</pre> */}
        <table className='table'>
            <thead>
            <th>Name</th>
            <th>Email</th>

            </thead>
            <tbody>
            {
                //contacts is array[],contact is object{}
                props.contacts.map((contact)=>{
                    return <tr>
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