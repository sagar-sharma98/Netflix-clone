import React from "react";
import { Link } from "react-router-dom";
import "./FooterList.css";

function FooterList({openModal}) {
  return (


    <ul className="description_list">
      <div>
        <Link to="/dummylink/Audio Description" className="listItem" style={{cursor: "pointer"}}>Audio Description</Link>
        <Link to="/dummylink/Help Centre" className="listItem" style={{cursor: "pointer"}}>Help Centre</Link>
        <Link to="/dummylink/Gift Cards" className="listItem" style={{cursor: "pointer"}}>Gift Cards</Link>
      </div>
      <div>
        <Link to="/dummylink/Gift Cards" className="listItem" style={{cursor: "pointer"}}>Gift Cards</Link>
        <Link to="/dummylink/Investor Relations" className="listItem" style={{cursor: "pointer"}}>Investor Relations</Link>
        <Link to="/dummylink/Jobs" className="listItem" style={{cursor: "pointer"}}>Jobs</Link>
      </div>
      <div>
        <Link to="/dummylink/Terms of Use" className="listItem" style={{cursor: "pointer"}}>Terms of Use</Link>
        <Link to="/dummylink/Privacy" className="listItem" style={{cursor: "pointer"}}>Privacy</Link>
        <Link to="/dummylink/Legal Notices" className="listItem" style={{cursor: "pointer"}}>Legal Notices</Link>
      </div>
      <div>
        <Link to="/dummylink/Cookie Prefrences" className="listItem" style={{cursor: "pointer"}}>Cookie Prefrences</Link>
        <Link to="/dummylink/Corporate Information" className="listItem" style={{cursor: "pointer"}}>Corporate Information</Link>
        <Link to="/dummylink/Contact Us" className="listItem" style={{cursor: "pointer"}}>Contact Us</Link>
      </div>
    </ul>
  );
}

export default FooterList;
