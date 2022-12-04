import {FC} from "react";

export const ContactForm: FC = () => {
  return (
    <>
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
    </>
  )
}