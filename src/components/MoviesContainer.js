import React, { useCallback, useEffect, useState } from "react";
import "./MovieContainer.css";
import MovieCategory from "./MovieCategory";


function MoviesContainer() {
  const [moviesData, setMoviesData] = useState([]);

  const url = 'https://movies-api14.p.rapidapi.com/home';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31fb0e9fb0mshc84665f825a6b5ep1a19ebjsnab211bccee35',
		'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
	}
};

  const fetchData = useCallback(async() => {
    try {
      const response = await fetch(url, options);
    const result = await response.json();
    setMoviesData(result);
    } catch (error) {
      console.log(error);
    }  
  }, []);

  useEffect(() => {
    fetchData();
  }, [])



  return (<>
   { moviesData.length > 0 &&
    <div style={{backgroundColor: "black"}}>
        <MovieCategory title="Trending Now"  movies={moviesData[0].movies}/>
        <MovieCategory title="Netflix Original"  movies={moviesData[1].movies} />
        <MovieCategory title="Top Rated"  movies={moviesData[3].movies}/>
        <MovieCategory title="New Shows" movies={moviesData[6].movies}/>
        <MovieCategory title="Family Time Movies"  movies={moviesData[4].movies}/>
        <MovieCategory title="Animation Movies"  movies={moviesData[2].movies}/>
        <MovieCategory title="Sci-Fi Movies"  movies={moviesData[8].movies}/>
        <MovieCategory title="Documentry Movies"  movies={moviesData[9].movies}/>
    </div>}
    </>
  );
}

export default MoviesContainer;
