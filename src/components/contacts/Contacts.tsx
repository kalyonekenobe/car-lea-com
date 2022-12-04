import {FC} from "react";
import {Navbar} from "../application/Navbar";
import {Footer} from "../application/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../../styles/contacts/contacts.css";
import {faEnvelope, faMapLocationDot, faSquarePhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faTelegram, faYoutube, faWhatsapp, faViber} from "@fortawesome/free-brands-svg-icons";

export const Contacts: FC = () => {
  return (
    <main className={"contacts"}>
      <Navbar navbarTheme={"white"} />
      <section className={"contacts-section"}>
        <div className={"contacts-container"}>
          <div className={"map-wrapper"}>
            <iframe
              src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.8671559922486!2d30.497970240037507!3d5" +
                "0.45135291691984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce60898c3581%3A0x98e2fe1c31" +
                "e01fbb!2z0LLRg9C70LjRhtGPINCR0YPQu9GM0LLQsNGA0L3Qvi3QmtGD0LTRgNGP0LLRgdGM0LrQsCwgMjIsINCa0LjRl9CyLCA" +
                "wMjAwMA!5e0!3m2!1suk!2sua!4v1670148409253!5m2!1suk!2sua"}
              loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"} />
          </div>
          <div className={"form-container"}>
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
            <h3 className={"form-heading"}>Contact us</h3>
            <form className={"form"}>
              <div className={"form-group"}>
                <div className={"form-item"}>
                  <input type={"text"} name={"name"} id={"name"} placeholder={"Your name"} />
                </div>
              </div>
              <div className={"form-group"}>
                <div className={"form-item"}>
                  <input type={"email"} name={"email"} id={"email"} placeholder={"Email"} />
                </div>
              </div>
              <div className={"form-group"}>
                <div className={"form-item"}>
                  <textarea name={"message"} id={"message"} placeholder={"Message"} />
                </div>
              </div>
              <div className={"form-group"}>
                <div className={"form-item"}>
                  <input type={"submit"} className={"button button-black submit-button"} value={"Contact us"} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}