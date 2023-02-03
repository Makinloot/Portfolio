import { useContext } from "react";
import { LoadContext } from "../../App";

import Form from "./Form";

const Contact = () => {
  const active = useContext(LoadContext);

  return (
    <div className={active ? "Contact flex-row" : "Contact flex-row hidden"} id="contact">
      <div className="container-small">
        <h2 className="Contact-title">Contact me</h2>
        <div className="Contact-wrapper">
          <p className="Contact-text">
            I'm interested in freelance & fulltime job opportunities. However,
            if you have other request or question, don't hesitate to use the
            form.
            E-Mail: Itorn9777@gmail.com
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
