import React, { useCallback, useEffect, useState } from "react";

import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./MovieBox.css";


function MovieBox() {
  const [movie, setMovie] = useState([]);

  const url = "https://movies-api14.p.rapidapi.com/movies";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "31fb0e9fb0mshc84665f825a6b5ep1a19ebjsnab211bccee35",
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  };



    const  fetchData = useCallback(async() => {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.movies[Math.floor(Math.random())]);
      setMovie(result.movies[Math.floor(Math.random())]);
      console.log(movie.backdrop_path);
    }, []);
  

  useEffect(() => {
    fetchData();
  }, []);

  // function description(str = "", n) {
  //   console.log(str);
  //   if (str.length > n) {
  //     return str.substr(0, n - 1);
  //   }
  //   return str;
  // }

  return (
   
      
        <div
          className="movie_container"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("${movie.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="info_container">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <div className="btn">
              <button className="play_btn">
                <FaPlay />
                <p>Play</p>
              </button>
              <button className="info_btn">
                <AiOutlineInfoCircle size={30} />
                <p> More Info</p>
              </button>
            </div>
          </div>
        </div>
    
  );
}

export default MovieBox;