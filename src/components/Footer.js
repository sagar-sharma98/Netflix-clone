import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FooterList from "./FooterList";
import "./Footer.css"

function Footer () {
    const copyright = String.fromCodePoint(0x000A9);

    return(<div className="footer_contanier">
        <div className="footer_box">
            <div className="icon_footer">
                <ul className="icon_list">
                    <li ><FaFacebookF size={20}/></li>
                    <li><FaInstagram size={20}/></li>
                    <li><FaTwitter size={20}/></li>
                    <li><FaYoutube size={20}/></li>
                </ul>   
            </div>
            <div className="list_footer">
                <FooterList/>
            </div>
            <div className="service_code_footer">
                <p className="service_code">Service Code</p>
            </div>
            <div className="copyright_footer">
                <p>{copyright} 1997-2023 Netflix, Inc.</p>
            </div>
        </div>
    </div>)
}

export default Footer;