import React from "react";
import ReactDOM from "react-dom";
import "./VideoPlayerModal.css";
import { FaArrowLeft } from "react-icons/fa6";

export default function VideoPlayerModal({ videosrc, closeVideoHandler }) {
  return ReactDOM.createPortal(
    <div className="video_container">
      <div className="video_modal">
        <FaArrowLeft className="arrow_icon" size={40} onClick={closeVideoHandler} />

        <video width="100%" height="100%" controls autoPlay>
          <source src={videosrc}  />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>,
    document.getElementById("video-modal")
  );
}
