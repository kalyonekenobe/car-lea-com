import {FC} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
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
        <Link to={"/"} replace={true}>Home</Link>
        <Link to={"/cars"} replace={true} className={"active"}>Cars</Link>
        <Link to={"/contacts"} replace={true}>Contacts</Link>
      </nav>
    </div>
  )
}