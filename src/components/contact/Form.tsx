import { FormEvent, useState } from "react";

import { InputData } from "../../data";
import InputField from "./InputField";

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
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });

  // submit form
  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(inputValues);
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
    <form
      className="Contact-form"
      action="#"
      autoComplete="off"
      onSubmit={handleSubmitForm}
    >
      {handleInputs()}
      <input type="submit" value="Submit form!" id="submit-form" />
    </form>
  );
};

export default Form;
