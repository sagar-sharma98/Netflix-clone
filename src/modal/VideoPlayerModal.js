import React from "react";
import ReactDOM from "react-dom";
import "./VideoPlayerModal.css";
import { IoClose } from "react-icons/io5";

export default function VideoPlayerModal({ videosrc, closeVideoHandler }) {
  return ReactDOM.createPortal(
    <div className="video_container">
      <div className="video_modal">
        <IoClose className="close_icon" size={40} onClick={closeVideoHandler} />

        <iframe
          src={
            videosrc === ""
              ? "https://www.youtube.com/embed/nu2HHq3sens"
              : videosrc
          }
        />
      </div>
    </div>,
    document.getElementById("video-modal")
  );
}
