import {FC} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faXmark} from "@fortawesome/free-solid-svg-icons";
import {MobileMenuPropsType} from "../../types/application/application.types";

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
            <Link to={"/cars/hatchbacks"} replace={true} className={location === '/cars/hatchbacks' ? "active" : ""}>
              Hatchbacks
            </Link>
            <Link to={"/cars/sedans"} replace={true} className={location === '/cars/sedans' ? "active" : ""}>
              Sedans
            </Link>
            <Link to={"/cars/wagons"} replace={true} className={location === '/cars/wagons' ? "active" : ""}>
              Wagons
            </Link>
            <Link to={"/cars/convertibles"} replace={true} className={location === '/cars/convertibles' ? "active" : ""}>
              Convertibles
            </Link>
            <Link to={"/cars/coupes"} replace={true} className={location === '/cars/coupes' ? "active" : ""}>
              Coupes
            </Link>
            <Link to={"/cars/suvs"} replace={true} className={location === '/cars/suvs' ? "active" : ""}>
              SUVs
            </Link>
            <Link to={"/cars/pickups"} replace={true} className={location === '/cars/pickups' ? "active" : ""}>
              Pick Ups
            </Link>
            <Link to={"/cars/vans"} replace={true} className={location === '/cars/vans' ? "active" : ""}>
              VANs
            </Link>
            <Link to={"/cars/jeeps"} replace={true} className={location === '/cars/jeeps' ? "active" : ""}>
              Jeeps
            </Link>
          </div>
        </div>
        <Link to={"/contacts"} replace={true} className={location === '/contacts' ? "active" : ""}>Contacts</Link>
      </nav>
    </div>
  )
}