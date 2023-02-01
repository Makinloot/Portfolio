import { FormEvent, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import { InputData } from "../../data";
import InputField from "./InputField";
import Popup from "./Popup";

export type ChangeEventTypes = {
  target: {
    name: string;
    value: string;
    classList: {
      add: any;
    };
  }
}

const Form = () => {
  const form = useRef<any>();
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // submit form
  const handleSubmitForm = (e: FormEvent | any) => {
    e.preventDefault();

    emailjs.sendForm('service_v4f5lea', 'template_wdjkhr', form.current, 'EFI6_J30jhFhLqq5K')
      .then((result) => {
          setShowPopup(true);
      }, (error) => {
          alert('something went wrong, please try again')
      });
      e.target.reset()
  };

  // set input value
  const handleInputChange = (e: ChangeEventTypes) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleInputs = () => {
    return InputData.map((input) => (
      <InputField
        key={input.id}
        nameClass={input.wrapper_class}
        {...input}
        onChange={handleInputChange}
      />
    ));
  };

  return (
    <>
      <Popup 
        handlePopup={showPopup}
        setHandlePopup={setShowPopup}
      />
      <form
        className="Contact-form"
        autoComplete="off"
        ref={form}
        onSubmit={handleSubmitForm}
      >
        {handleInputs()}
        <input type="submit" value="Submit form!" id="submit-form" />
      </form>
    </>
  );
};

export default Form;
