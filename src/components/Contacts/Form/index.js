import {useState, useEffect} from "react";

const initalFormValues ={fullname: "", phone_number:""}
function Form({addContacts, contacts}) {

    const [form, setForm] = useState(initalFormValues);

    useEffect(() =>{
        setForm(initalFormValues);
    }, [contacts])


    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullname === '' || form.phone_number === ''){
            return false;
        }
        
        addContacts([...contacts,form]);

    }

  return (
    <form onSubmit={onSubmit}>

      <div>
        <input name="fullname" placeholder="Fullname" value= {form.fullname} onChange={onChangeInput}></input>
      </div>
      <div>
        <input name="phone_number" placeholder="Phone number" value= {form.phone_number}  onChange={onChangeInput}></input>
      </div>

      <div className="btn">
        <button>Add</button>
      </div>

    </form>
  );
}

export default Form;
