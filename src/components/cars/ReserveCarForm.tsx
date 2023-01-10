import {FC, FormEvent, useState} from "react";
import {CarType, ReserveCarFormPropsType, ReserveCarFormStateType} from "../../types/cars/cars.types";
import {FormErrorType} from "../../types/application/application.types";
import axios from "axios";
import {useLocation} from "react-router";

const initialState: ReserveCarFormStateType = {
  data: {
    bookerName: "",
    bookerPhone: "",
    from: new Date(),
    to: new Date(),
    additionalWishes: ""
  },
  errors: []
}

export const ReserveCarForm: FC<ReserveCarFormPropsType> = props => {
  const [state, setState] = useState(initialState)
  const location = useLocation()

  const convertToDate = (stringDate: string): Date => {
    return new Date(Date.parse(stringDate));
  }

  const convertToStringDate = (date: Date): string => {
    date.setHours(date.getHours() - (new Date().getTimezoneOffset() / 60) / 2)
    return date.toISOString().slice(0, 16)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let formErrors: FormErrorType[] = [];
    let {car} = props;
    if (car) {
      if (!state.data.bookerPhone.match("^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$")) {
        formErrors.push({
          fieldName: "phone",
          message: "wrong phone number"
        })
      }
      if (car.reservations.find(reservation => {
        return (new Date(reservation.from).getTime() >= state.data.from.getTime() && new Date(reservation.from).getTime() <= state.data.to.getTime()) ||
               (new Date(reservation.to).getTime() >= state.data.from.getTime() && new Date(reservation.to).getTime() <= state.data.to.getTime());
      })) {
        formErrors.push({fieldName: "from", message: "The car is reserved on this period."})
        formErrors.push({fieldName: "to", message: "The car is reserved on this period."})
      }
      if (formErrors.length === 0) {
        car.reservations.push(state.data)
        axios.put<CarType>(`http://localhost:3001${location.pathname}`, car).then(() => {
          setState(initialState)
        })
      } else {
        setState({...state, errors: formErrors})
      }
    }
  }

  return (
    <div className={"form-container"}>
      <h3 className={"form-heading"}>Reserve car</h3>
      <form className={"form"} onSubmit={event => handleSubmit(event)}>
        <div className={"form-group"}>
          <div className={"form-item"}>
            <input type={"text"} name={"name"} id={"name"} placeholder={"Your name"} required
                   value={state.data.bookerName}
                   onChange={event => {
                     setState({
                       ...state,
                       data: {...state.data, bookerName: event.target.value},
                       errors: []
                     })
                   }}
            />
          </div>
        </div>
        <div className={"form-group"}>
          <div className={"form-item"}>
            <input type={"tel"} name={"phone"} id={"phone"} placeholder={"Phone number"} required
                   value={state.data.bookerPhone}
                   className={state.errors.find(error => error.fieldName === 'phone') ? 'error-input' : ''}
                   onChange={event => {
                     setState({
                       ...state,
                       data: {...state.data, bookerPhone: event.target.value},
                       errors: []
                     })
                   }}
            />
            {
              state.errors.filter(error => error.fieldName === 'phone').map((error, index) => (
                <span key={index} className={'error'}>{error.message}</span>
              ))
            }
          </div>
        </div>
        <div className={"form-group"}>
          <div className={"form-item"}>
            <input type={"datetime-local"} name={"from"} id={"from"} required
                   className={state.errors.find(error => error.fieldName === 'from') ? 'error-input' : ''}
                   defaultValue={convertToStringDate(state.data.from)}
                   onChange={event => {
                     if (convertToDate(event.target.value).getFullYear() < 10000)
                      setState({
                        ...state,
                        data: {...state.data, from: convertToDate(event.target.value)},
                        errors: []
                      })
                   }}
            />
            {
              state.errors.filter(error => error.fieldName === 'from').map((error, index) => (
                <span key={index} className={'error'}>{error.message}</span>
              ))
            }
          </div>
        </div>
        <div className={"form-group"}>
          <div className={"form-item"}>
            <input type={"datetime-local"} name={"to"} id={"to"} required
                   className={state.errors.find(error => error.fieldName === 'to') ? 'error-input' : ''}
                   defaultValue={convertToStringDate(state.data.to)}
                   onChange={event => {
                     if (convertToDate(event.target.value).getFullYear() < 10000)
                      setState({
                        ...state,
                        data: {...state.data, to: convertToDate(event.target.value)},
                        errors: []
                      })
                   }}
            />
            {
              state.errors.filter(error => error.fieldName === 'to').map((error, index) => (
                <span key={index} className={'error'}>{error.message}</span>
              ))
            }
          </div>
        </div>
        <div className={"form-group"}>
          <div className={"form-item"}>
            <textarea name={"additional-wishes"} id={"additional-wishes"} placeholder={"Additional wishes"}
                      value={state.data.additionalWishes}
                      onChange={event => {
                        setState({
                          ...state,
                          data: {...state.data, additionalWishes: event.target.value},
                          errors: []
                        })
                      }}
            />
          </div>
        </div>
        <div className={"form-group"}>
          <div className={"form-item"}>
            <input type={"submit"} className={"button button-red submit-button"} value={"Reserve car"} />
          </div>
        </div>
      </form>
    </div>
  )
}