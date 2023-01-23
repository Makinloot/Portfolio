import React from "react";

type InputFieldTypes = {
  nameClass: string;
  type: string;
  id: string;
  placeholder: string;
  name: string;
};

const InputField: React.FC<InputFieldTypes> = ({
  nameClass,
  type,
  id,
  placeholder,
  name,
}) => {

  // return textarea element instead of input element
  if (nameClass === "textarea-wrapper") {
    return (
      <div className={`input-wrapper ${nameClass}`}>
        <textarea
          className={nameClass}
          name={name}
          id={id}
          cols={30}
          rows={10}
          placeholder={placeholder}
        />
        <div className="input-border"></div>
      </div>
    );
  }

  return (
    <div className={`input-wrapper ${nameClass}`}>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        required
      />
      <div className="input-border"></div>
    </div>
  );
};

export default InputField;
