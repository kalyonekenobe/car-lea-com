import {FC} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faXmark} from "@fortawesome/free-solid-svg-icons";
import {MobileMenuPropsType} from "../../types/application/application.types";
import {CarsPagePropsType} from "../../types/cars/cars.types";

export const MobileMenu: FC<MobileMenuPropsType> = (props) => {
  const location = window.location.pathname;
  const {close} = props;

  return (
    <div className={"mobile-menu"}>
      <header>
        <h3>Menu</h3>
        <FontAwesomeIcon icon={faXmark} onClick={() => close()} />
      </header>
      <nav className={"navigation"}>
        <Link to={"/"} replace={true} className={location === '/' ? "active" : ""}>Home</Link>
        <div className={"navigation-link-container"}>
          <Link to={"/cars"} replace={true} className={location === '/cars' ? "active" : ""}>Cars</Link>
          <FontAwesomeIcon icon={faCaretDown} />
          <div className={"submenu cars-submenu"}>
            <Link to={"/cars"} replace={true} state={{category: "hatchbacks"} as CarsPagePropsType}>
              Hatchbacks
            </Link>
            <Link to={"/cars"} replace={true} state={{category: "sedans"} as CarsPagePropsType}>
              Sedans
            </Link>
            <Link to={"/cars"} replace={true} state={{category: "wagons"} as CarsPagePropsType}>
              Wagons
            </Link>
            <Link to={"/cars"} replace={true} state={{category: "convertibles"} as CarsPagePropsType}>
              Convertibles
            </Link>
            <Link to={"/cars"} replace={true} state={{category: "coupes"} as CarsPagePropsType}>
              Coupes
            </Link>
            <Link to={"/cars"} replace={true} state={{category: "suvs"} as CarsPagePropsType}>
              SUVs
            </Link>
            <Link to={"/cars"} replace={true} state={{category: "pickups"} as CarsPagePropsType}>
              Pick Ups
            </Link>
            <Link to={"/cars"} replace={true} state={{category: "vans"} as CarsPagePropsType}>
              VANs
            </Link>
            <Link to={"/cars"} replace={true} state={{category: "jeeps"} as CarsPagePropsType}>
              Jeeps
            </Link>
          </div>
        </div>
        <Link to={"/contacts"} replace={true} className={location === '/contacts' ? "active" : ""}>Contacts</Link>
      </nav>
    </div>
  )
}