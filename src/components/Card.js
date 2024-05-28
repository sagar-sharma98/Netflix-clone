import React, { useContext, useState } from "react";
import "./Card.css";
import { FaPlayCircle } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaCircleChevronDown } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";
import VideoPlayerModal from "../modal/VideoPlayerModal";
import { addWishList, loginAuth, removeWishList } from "../App";
import { useNavigate } from "react-router-dom";

const dummy_video = process.env.PUBLIC_URL + "/videos/Dummy_Video.mp4";

function Card({ movie, myList}) {
  const [hover, setHover] = useState(false);
  const [imageClick, setImageClick] = useState(false);
  const { dispatch } = useContext(loginAuth);
  const navigate = useNavigate();
  const video_src = movie.video_url;

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

  const addCircleHandler = (id) => {
    console.log(id);
    dispatch(addWishList(id));
    navigate("/mylist");
  };

 const  checkMarkCircleHandler = (id) => {
  console.log(id);
  dispatch(removeWishList(id));
 }
  return (
    <div
      className="card_container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={movie.thumbnail} />
      {hover && (
        <div className="hover_container">
          <div className="movie_picture" onClick={imageHandler}>
            <img src={movie.thumbnail} />
          </div>
          <div className="movie_info">
            <div className="icons">
              <FaPlayCircle size={30} color="white" onClick={imageHandler} />
              {myList ?  < IoCheckmarkCircleOutline
                size={30}
                color="white"
                onClick={() => checkMarkCircleHandler(movie["_id"])}
              /> :   <IoAddCircleOutline
              size={30}
              color="white"
              onClick={() => addCircleHandler(movie["_id"])}
            />}
             

              <FaRegThumbsUp size={30} color="white" />
              <FaCircleChevronDown size={30} color="white" />
            </div>
            <h4 className="title">{movie.title}</h4>
            <ul className="geners_list">
              {movie.keywords.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {imageClick && (
        <VideoPlayerModal
          videosrc={video_src}
          type="video/mp4"
          closeVideoHandler={videoModalHandler}
        />
      )}
    </div>
  );
}

export default Card;
