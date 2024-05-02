import React from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";
import { IoClose } from "react-icons/io5";

export default function ErrorModal({ text, closeErrorModal}) {
  return ReactDOM.createPortal(
    <div className="error-modal">
      <div className="error-container">
        <IoClose className="close-Error-Icon" size={20} onClick={closeErrorModal}/>
        <p>{text}</p>
      </div>
    </div>, document.getElementById("error-modal")
  );
}
