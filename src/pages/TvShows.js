import React, { useContext } from "react";
import { loginAuth } from "../App";
import MovieCategory from "../components/MovieCategory";

function TvShows() {
  const { state } = useContext(loginAuth);
  return (
    <div>
      <div style={{ margin: "0 4px", width: "100vw", paddingTop: "6rem" }}>
        <MovieCategory
          title="Get In On The Action"
          movies={state.movies[0].movies}
        />
        <MovieCategory title="Family TV Favorites" movies={state.movies[8].movies} />
        <MovieCategory
          title="TV Action & Adventure"
          movies={state.movies[4].movies}
        />
        <MovieCategory
          title="US TV Dramas"
          movies={state.movies[7].movies}
        />
      </div>
    </div>
  );
}

export default TvShows;
