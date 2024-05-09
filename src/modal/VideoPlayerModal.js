import React from "react";
import ReactDOM from "react-dom";
import "./VideoPlayerModal.css";
import { FaArrowLeft } from "react-icons/fa6";

export default function VideoPlayerModal({ videosrc, closeVideoHandler }) {
  return ReactDOM.createPortal(
    <div className="video_container">
      <div className="video_modal">
        <FaArrowLeft className="arrow_icon" size={40} onClick={closeVideoHandler} />

        <iframe src={videosrc} />
      </div>
    </div>,
    document.getElementById("video-modal")
  );
}
