import {FC} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faXmark} from "@fortawesome/free-solid-svg-icons";
import {MobileMenuPropsType} from "../../types/application/application.types";

export const MobileMenu: FC<MobileMenuPropsType> = (props) => {

  const {close} = props;

  return (
    <div className={"mobile-menu"}>
      <header>
        <h3>Menu</h3>
        <FontAwesomeIcon icon={faXmark} onClick={() => close()} />
      </header>
      <nav className={"navigation"}>
        <Link to={"/"} replace={true} className={"active"}>Home</Link>
        <div className={"navigation-link-container"}>
          <Link to={"/cars"} replace={true} >Cars</Link>
          <FontAwesomeIcon icon={faCaretDown} />
          <div className={"submenu cars-submenu"}>
            <Link to={"/cars/hatchbacks"} replace={true}>Hatchbacks</Link>
            <Link to={"/cars/sedans"} replace={true}>Sedans</Link>
            <Link to={"/cars/wagons"} replace={true}>Wagons</Link>
            <Link to={"/cars/convertibles"} replace={true}>Convertibles</Link>
            <Link to={"/cars/coupes"} replace={true}>Coupes</Link>
            <Link to={"/cars/suvs"} replace={true}>SUVs</Link>
            <Link to={"/cars/pickups"} replace={true}>Pick Ups</Link>
            <Link to={"/cars/vans"} replace={true}>VANs</Link>
            <Link to={"/cars/jeeps"} replace={true}>Jeeps</Link>
          </div>
        </div>
        <Link to={"/contacts"} replace={true}>Contacts</Link>
      </nav>
    </div>
  )
}