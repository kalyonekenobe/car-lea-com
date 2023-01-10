import {FC, useEffect, useState} from "react";
import {Navbar} from "../application/Navbar";
import {Footer} from "../application/Footer";
import axios, {AxiosResponse} from "axios";
import {CarDetailsStateType, CarReservationType, CarType} from "../../types/cars/cars.types";
import {useLocation} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGaugeHigh, faGears, faSackDollar, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import {ReserveCarForm} from "./ReserveCarForm";
import {GiveCarFeedbackForm} from "./GiveCarFeedbackForm";

export const CarDetails: FC = () => {
  const [state, setState] = useState<CarDetailsStateType>();
  const location = useLocation()

  useEffect(() => {
    axios.get<number, AxiosResponse<CarType>>(`https://carleacom.herokuapp.com/api${location.pathname}`).then(response => {
      let car = response.data;
      car.reservations = structuredClone(car.reservations).sort((a: CarReservationType, b: CarReservationType) => {
        if (new Date(a.from).getTime() === new Date(b.from).getTime())
          return new Date(b.to).getTime() - new Date(a.to).getTime();
        return new Date(b.from).getTime() - new Date(a.from).getTime();
      })
      setState({...state, data: car});
    })
  }, [])

  return (
    <main className={"car-details"}>
      <Navbar navbarTheme={"white"} changeNavbarThemeCheckpoint={0} />
      <div className={"content"}>
        <div className={"car-info"}>
          {
            state ?
              <>
                <header className={"car-info-header"}>
                  <img src={`${process.env.PUBLIC_URL}/${state?.data.image}`} alt={state?.data.title} />
                  <h3>{state?.data.title}</h3>
                </header>
                <div className={'car-info-content'}>
                  <div className={"content-item price-per-day"}>
                    <label>
                      Price per day:
                      <br/>
                      <span>
                        <FontAwesomeIcon icon={faSackDollar} />
                        {state?.data.pricePerDay}$
                      </span>
                    </label>
                  </div>
                  <div className={"content-item number-of-seats"}>
                    <label>
                      Number of seats:
                      <br/>
                      <span>
                        <FontAwesomeIcon icon={faUserGroup} />
                        {state?.data.seats}
                      </span>
                    </label>
                  </div>
                  <div className={"content-item mileage"}>
                    <label>
                      Mileage:
                      <br/>
                      <span>
                        <FontAwesomeIcon icon={faGaugeHigh} />
                        {state?.data.mileage} km
                      </span>
                    </label>
                  </div>
                  <div className={"content-item transmission"}>
                    <label>
                      Transmission type:
                      <br/>
                      <span>
                        <FontAwesomeIcon icon={faGears} />
                        {state?.data.transmission}
                      </span>
                    </label>
                  </div>
                </div>
                <footer className={'car-info-footer'}>
                  <h3>Reservations: </h3>
                  <div className={"reservations"}>
                    <div className={'car-reservation'}>
                      <div>From</div>
                      <div>To</div>
                    </div>
                    {
                      state?.data && state.data.reservations.length > 0 ?
                        state.data.reservations.map((reservation, index) => (
                          <div className={"car-reservation"} key={index}>
                            <div className={"from"}>
                              {new Date(reservation.from).toLocaleDateString()} {new Date(reservation.from).toLocaleTimeString()}
                            </div>
                            <div className={"to"}>
                              {new Date(reservation.from).toLocaleDateString()} {new Date(reservation.from).toLocaleTimeString()}
                            </div>
                          </div>
                        ))
                        :
                        <div className={"car-reservation"}>
                          <div className={'no-reservations'}>
                            This car has not been reserved yet
                          </div>
                        </div>
                    }
                  </div>
                  <h3>Feedbacks:</h3>
                  <div className={"feedbacks"}>
                    {
                      state?.data && state.data.feedbacks.length > 0 ?
                        state.data.feedbacks.map((feedback, index) => (
                          <div className={"car-feedback"} key={index}>
                            <div className={"author"}>
                              <h4>{feedback.name}</h4>
                            </div>
                            <div className={"text"}>
                              <p>{feedback.feedback}</p>
                            </div>
                          </div>
                        ))
                        :
                        <></>
                    }
                  </div>
                </footer>
              </>
            :
              <div className={"loading-page"}>
                <img src={`${process.env.PUBLIC_URL}/images/loading.gif`} alt={"Loading"} />
              </div>
          }
        </div>
        <div className={"forms"}>
          <ReserveCarForm car={state?.data} />
          <GiveCarFeedbackForm car={state?.data} />
        </div>
      </div>
      <Footer />
    </main>
  )
}