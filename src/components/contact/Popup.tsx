import { FormEvent, useRef, useState, useEffect } from "react";

import "./Popup.css";

const Popup = ({
  handlePopup,
  setHandlePopup,
}: {
  handlePopup: boolean;
  setHandlePopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // close popup
  useEffect(() => {
    if(handlePopup) {
      const handleClosePopup = () => setHandlePopup(!handlePopup);
      document.addEventListener("click", () => handleClosePopup());
      return () => document.removeEventListener("click", handleClosePopup);
    }
  }, [handlePopup]);

  return (
    <div className={handlePopup ? "Popup flex-row active" : "Popup flex-row"}>
      <div className="Popup-wrapper">
        <p>Thanks for getting in touch,</p>
        <p>i will respond shortly !</p>
        <button className="Popup-button">close</button>
      </div>
    </div>
  );
};

export default Popup;
