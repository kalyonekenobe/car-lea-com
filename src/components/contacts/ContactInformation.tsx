import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapLocationDot, faSquarePhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faTelegram, faViber, faWhatsapp, faYoutube} from "@fortawesome/free-brands-svg-icons";

export const ContactInformation: FC = () => {
  return (
    <>
      <h3 className={"form-heading"}>Contact information</h3>
      <ul className={"contact-information"}>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          Email: <span>carleacom@gmail.com</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faSquarePhone} />
          Phone: <span>+38(098)-765-43-21</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faMapLocationDot} />
          Address: <span>22 Bulʹvarno-Kudryavsʹka Street, Kyiv, 01601, Ukraine </span>
        </li>
        <li>
          <br/>
          Social networks:
          <div className={"social-networks"}>
            <a><FontAwesomeIcon icon={faFacebook} /></a>
            <a><FontAwesomeIcon icon={faInstagram} /></a>
            <a><FontAwesomeIcon icon={faTelegram} /></a>
            <a><FontAwesomeIcon icon={faYoutube} /></a>
            <a><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a><FontAwesomeIcon icon={faViber} /></a>
          </div>
        </li>
      </ul>
    </>
  )
}