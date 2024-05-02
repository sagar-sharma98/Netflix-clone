import React, { useState } from "react";
import "./Card.css";
import { FaPlayCircle } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaCircleChevronDown } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";
import VideoPlayerModal from "../modal/VideoPlayerModal";

function Card({ movie }) {
  const [hover, setHover] = useState(false);
  const [imageClick, setImageClick] = useState(false);

  const imageHandler = () => {
    setImageClick(true);
    setHover(false);
    document.getElementById("root").style.opacity = "0.7";
  };

  const videoModalHandler = () => {
    setImageClick(false);
    setHover(false);
    document.getElementById("root").style.opacity = "1";

  };

  return (
    <div
      className="card_container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={movie.poster_path} />
      {hover && (
        <div className="hover_container" >
          <div className="movie_picture" onClick={imageHandler}>
            <img src={movie.poster_path} />
          </div>
          <div className="movie_info">
            <div className="icons">
              <FaPlayCircle size={30} color="white"  onClick={imageHandler} />
              <IoAddCircleOutline size={30} color="white" />
              <FaRegThumbsUp size={30} color="white" />
              <FaCircleChevronDown size={30} color="white" />
            </div>
            <h4 className="title">{movie.title}</h4>
            <ul className="geners_list">
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {imageClick && <VideoPlayerModal videosrc="" closeVideoHandler={videoModalHandler}/>}
    </div>
  );
}

export default Card;
