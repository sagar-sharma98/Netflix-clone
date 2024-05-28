import React, {  useRef, useState } from "react";
import "./MovieCategory.css";
import Card from "./Card";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function MovieCategory({title, movies, myList=false  }) {
  const listRef = useRef();
  // const [movies, setMovies] = useState([]);
  const [sliderPosition, setSliderPosition] = useState(0);

  const sliderHandler = (direction) =>{
    console.log("slider btn")
   
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if(direction === "left" && sliderPosition > 0){
      console.log('left direction')
      listRef.current.style.transform = `translateX(${300 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    
    if(direction === "right" && sliderPosition < 4){
      console.log('right direction')
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }

    console.log('slider ending')
  }

  // useEffect(() => {
  //   async function fetchMovies() {
  //     const response = await axios.get(fetchUrl);
  //     setMovies(response.data.results);
  //   }
  //   fetchMovies();
  // }, [fetchUrl]);

  return (
    <div className="movie_catagory">
      <h2>{title}</h2>
      <div className="left_arrow">
        <IoIosArrowBack className="left_btn" color="white" size={30} onClick={() => sliderHandler('left')} />
      </div>
      <div className="movies_container" ref={listRef}>
        {movies.map((movie, index) => (
          <Card key={index} movie={movie} myList={myList} />
        ))}
      </div>
      <div className="right_arrow">
        <IoIosArrowForward className="right_btn" color="white" size={30} onClick={() => sliderHandler('right')}/>
      </div>
    </div>
  );
}

export default MovieCategory;
