import {FC} from "react";
import {Navbar} from "../application/Navbar";
import {Footer} from "../application/Footer";
import "../../styles/contacts/contacts.css";
import {ContactsSection} from "./ContactsSection";

export const Contacts: FC = () => {
  return (
    <main className={"contacts"}>
      <Navbar navbarTheme={"white"} />
      <ContactsSection />
      <Footer />
    </main>
  )
}