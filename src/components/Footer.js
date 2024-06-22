import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FooterList from "./FooterList";
import "./Footer.css";
import ErrorModal from "../modal/ErrorModal";

function Footer() {
  const [error, setError] = useState(false);
  const copyright = String.fromCodePoint(0x000a9);

  const modalBtnHandler = () => {
    setError(false);
  };

  const openModal = () => {
    setError(true);
  };

  return (
    <div className="footer_contanier">
      <div className="footer_box">
        <div className="icon_footer">
          <ul className="icon_list">
            <li>
              <FaFacebookF size={20} />
            </li>
            <li>
              <FaInstagram size={20} />
            </li>
            <li>
              <FaTwitter size={20} />
            </li>
            <li>
              <FaYoutube size={20} />
            </li>
          </ul>
        </div>
        <div className="list_footer">
          <FooterList error={error} openModal={openModal}/>
        </div>
        <div className="service_code_footer">
          <p className="service_code">Service Code</p>
        </div>
        <div className="copyright_footer">
          <p>{copyright} 1997-2023 Netflix, Inc.</p>
        </div>
      </div>
      {error && (
        <ErrorModal
          text="Sorry, work in progress."
          closeErrorModal={modalBtnHandler}
        />
      )}
    </div>
  );
}

export default Footer;
