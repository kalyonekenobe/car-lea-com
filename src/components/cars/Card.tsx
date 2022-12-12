import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FC} from "react";
import {Link} from "react-router-dom";
import {CarCardPropsType} from "../../types/cars/cars.types";
import {faGaugeHigh, faGears, faSackDollar, faUserGroup} from "@fortawesome/free-solid-svg-icons";

export const Card: FC<CarCardPropsType> = props => {
  const {data} = props;

  return (
    <div className={"card"}>
      <header>
        <img src={data.image} alt={data.title} />
        <h3>{data.title}</h3>
      </header>
      <div className={"card-content"}>
        <div className={"content-item price-per-day"}>
          <label>
            Price per day:
            <br/>
            <span>
              <FontAwesomeIcon icon={faSackDollar} />
              {data.pricePerDay}$
            </span>
          </label>
        </div>
        <div className={"content-item number-of-seats"}>
          <label>
            Number of seats:
            <br/>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {data.seats}
            </span>
          </label>
        </div>
        <div className={"content-item mileage"}>
          <label>
            Mileage:
            <br/>
            <span>
              <FontAwesomeIcon icon={faGaugeHigh} />
              {data.mileage} km
            </span>
          </label>
        </div>
        <div className={"content-item transmission"}>
          <label>
            Transmission type:
            <br/>
            <span>
              <FontAwesomeIcon icon={faGears} />
              {data.transmission}
            </span>
          </label>
        </div>
      </div>
      <footer>
        <Link to={`cars/${data.id}`} className={"button button-red"} replace={true}>View details</Link>
      </footer>
    </div>
  )
}