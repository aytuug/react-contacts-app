import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
import {} from './styles.css'


function Contacts() {

    const [contacts, setContacts] = useState([

        {
            fullname : "Aytug",
            phone_number : 123
        },{
            fullname : "Cansu",
            phone_number : 546
        },{
            fullname : "Aylin",
            phone_number : 6534
        },{
            fullname : "Bülent",
            phone_number : 54654
        },{
            fullname : "Sude",
            phone_number : 1
        }


    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])


  return (
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContacts = {setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts    
