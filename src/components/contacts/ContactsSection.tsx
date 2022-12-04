import {FC} from "react";
import {Map} from "./Map";
import {ContactInformation} from "./ContactInformation";
import {ContactForm} from "./ContactForm";

export const ContactsSection: FC = () => {
  return (
    <section className={"contacts-section"}>
      <div className={"contacts-container"}>
        <Map />
        <div className={"form-container"}>
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}