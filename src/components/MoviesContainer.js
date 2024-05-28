import React, { useCallback, useContext, useEffect, useState } from "react";
import "./MovieContainer.css";
import MovieCategory from "./MovieCategory";
import { addMovies, loginAuth } from "../App";


function MoviesContainer() {
  const [moviesData, setMoviesData] = useState([]);
  const {dispatch} = useContext(loginAuth);


  // const fetchData = useCallback(async() => {
  //   try {
  //     const response = await fetch(url, options);
  //   const result = await response.json();
  //   setMoviesData(result);
  //   dispatch(addMovies(result));
    
  //   } catch (error) {
  //     console.log(error);
  //   }  
  // }, []);

  const fetchData = async() => {
    try {
      const response = await fetch("https://academics.newtonschool.co/api/v1/ott/show?limit=100", {
        headers: {
          "projectID" : "exn9j6ivl5cz"
        }
      });
      const result = await response.json();
      console.log(result.data);
      setMoviesData(result.data);
      dispatch(addMovies(result.data))
    } catch (error) {
      console.log(error);
    }
  }

 

  useEffect(() => {
    fetchData();
    
  }, [])



  return (<>
   { moviesData.length > 0 &&
    <div style={{backgroundColor: "black"}}>
        <MovieCategory title="Trending Now"  movies={moviesData.slice(0, 10)}/>
        <MovieCategory title="Netflix Original"  movies={moviesData.slice(10, 20)} />
        <MovieCategory title="Top Rated"  movies={moviesData.slice(20, 30)}/>
        <MovieCategory title="New Shows" movies={moviesData.slice(30, 40)}/>
        <MovieCategory title="Family Time Movies"  movies={moviesData.slice(40, 50)}/>
        <MovieCategory title="Animation Movies"  movies={moviesData.slice(50, 60)}/>
        <MovieCategory title="Sci-Fi Movies"  movies={moviesData.slice(60, 70)}/>
        <MovieCategory title="Documentry Movies"  movies={moviesData.slice(70, 80)}/>
    </div>}
    </>
  );
}

export default MoviesContainer;
