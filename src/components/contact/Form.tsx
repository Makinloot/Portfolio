import { FormEvent, useState } from "react";

import { InputData } from "../../data";
import InputField from "./InputField";

const Form = () => {
  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.target)
  };

  const handleInputs = () => {
    return InputData.map((input) => (
      <InputField key={input.id} nameClass={input.wrapper_class} {...input} />
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
