import {FC, FormEvent, useState} from "react";
import {ContactFormStateType} from "../../types/contacts/contacts.types";
import axios from "axios";

const initialState: ContactFormStateType = {
  name: "",
  email: "",
  message: ""
}

export const ContactForm: FC = () => {

  const [state, setState] = useState(initialState);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    axios.post<ContactFormStateType>(`${process.env.REACT_APP_SERVER_NAME}/contact-us`, state).then(() => {
      setState(initialState);
    });
  }

  return (
    <>
      <h3 className={"form-heading"}>Contact us</h3>
      <form className={"form"} onSubmit={event => handleSubmit(event)}>
        <div className={"form-group"}>
          <div className={"form-item"}>
            <input type={"text"} name={"name"} id={"name"} placeholder={"Your name"} required
                   value={state.name}
                   onChange={event => setState({...state, name: event.target.value})}
            />
          </div>
        </div>
        <div className={"form-group"}>
          <div className={"form-item"}>
            <input type={"email"} name={"email"} id={"email"} placeholder={"Email"} required
                   value={state.email}
                   onChange={event => setState({...state, email: event.target.value})}
            />
          </div>
        </div>
        <div className={"form-group"}>
          <div className={"form-item"}>
            <textarea name={"message"} id={"message"} placeholder={"Message"} required
                      value={state.message}
                      onChange={event => setState({...state, message: event.target.value})}
            />
          </div>
        </div>
        <div className={"form-group"}>
          <div className={"form-item"}>
            <input type={"submit"} className={"button button-black submit-button"} value={"Contact us"} />
          </div>
        </div>
      </form>
    </>
  )
}