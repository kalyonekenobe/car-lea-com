import {FC, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {MobileMenu} from "./MobileMenu";
import {NavbarStateType} from "../../types/application/application.types";

const initialState: NavbarStateType = {
  mobileMenuIsVisible: false,
  navbarTheme: "",
  windowScrollPercentage: 0
}

export const Navbar: FC = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll());
  }, [])

  const handleScroll = () => {
    let theme = state.navbarTheme;
    let scrollPercentage = window.scrollY / (document.body.clientHeight - window.innerHeight) * 100;
    if (window.scrollY > 100 && theme !== 'white')
      theme = "white";
    if (window.scrollY <= 100 && theme !== '')
      theme = "";
    setState({
      ...state,
      navbarTheme: theme,
      windowScrollPercentage: scrollPercentage
    });
  }

  return (
    <div className={`navigation-container ${state.navbarTheme}`}>
      <div className={"link-group"}>
        <span className={"show-burger-menu"}
              onClick={() => {
                document.body.style.overflow = 'hidden';
                setState({...state, mobileMenuIsVisible: true})
              }}
        >
          <FontAwesomeIcon icon={faBars} />
        </span>
        <nav className={"navigation"}>
          <Link to={'/'} replace={true} className={"logo link"}>CarLeaCom</Link>
          <Link to={"/"} replace={true} className={"link"}>Home</Link>
          <span className={"delimiter"} />
          <div className={"navigation-link-container"}>
            <Link to={"/cars"} replace={true} className={"link"} id={"navigation-cars-link"}>Cars</Link>
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
          <span className={"delimiter"} />
          <Link to={"/contacts"} replace={true} className={"link"}>Contacts</Link>
        </nav>
      </div>
      {
        state.mobileMenuIsVisible && <MobileMenu close={() => {
          document.body.style.overflow = 'auto';
          setState({...state, mobileMenuIsVisible: false})
        }} />
      }
      <div className={"link-group"}>
        <Link to={'/sign-in'} className={"button button-red"}>Sign In</Link>
        <Link to={'/sign-up'} className={"button button-gray"}>Sign Up</Link>
      </div>
      <div className={"window-scroll-percentage"} style={{width: state.windowScrollPercentage + "%"}}/>
    </div>
  )
}