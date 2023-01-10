import {FC, FormEvent, useState} from "react";
import {CarType, GiveCarFeedbackFormPropsType, GiveCarFeedbackFormStateType} from "../../types/cars/cars.types";
import axios from "axios";
import {useLocation} from "react-router";

const initialState: GiveCarFeedbackFormStateType = {
  data: {
    name: "",
    feedback: ""
  },
  errors: []
}

export const GiveCarFeedbackForm: FC<GiveCarFeedbackFormPropsType> = props => {

  const [state, setState] = useState(initialState);
  const location = useLocation();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let {car} = props;
    if (car) {
      car.feedbacks.push(state.data);
      axios.put<CarType>(`http://localhost:3001${location.pathname}`, car).then(() => {
        setState(initialState)
      })
    }
  }

  return (
    <div className={"form-container"}>
      <h3 className={"form-heading"}>Give feedback</h3>
      <form className={"form"} onSubmit={event => handleSubmit(event)}>
        <div className={"form-group"}>
          <div className={"form-item"}>
            <input type={"text"} name={"name"} id={"name"} placeholder={"Your name"} required
                   value={state.data.name}
                   onChange={event => setState({...state, data: {...state.data, name: event.target.value}})}
            />
          </div>
        </div>
        <div className={"form-group"}>
          <div className={"form-item"}>
            <textarea name={"feedback"} id={"feedback"} placeholder={"Feedback"} required
                      value={state.data.feedback}
                      onChange={event => setState({...state, data: {...state.data, feedback: event.target.value}})}
            />
          </div>
        </div>
        <div className={"form-group"}>
          <div className={"form-item"}>
            <input type={"submit"} className={"button button-black submit-button"} value={"Send feedback"} />
          </div>
        </div>
      </form>
    </div>
  )
}