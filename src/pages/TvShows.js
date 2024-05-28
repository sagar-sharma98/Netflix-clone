import React, { useContext } from "react";
import { loginAuth } from "../App";
import MovieCategory from "../components/MovieCategory";

function TvShows() {
  const { state } = useContext(loginAuth);
  return (
    <div>
      <div style={{ margin: "0 4px", width: "100vw", height: "60vh", paddingTop: "6rem" }}>
        {state.movies.length > 0 ? (
          <>
            
            <MovieCategory
              title="Get In On The Action"
              movies={state.movies.slice(70, 80)}
            />
            <MovieCategory
              title="Family TV Favorites"
              movies={state.movies.slice(80, 90)}
            />
            <MovieCategory
              title="TV Action & Adventure"
              movies={state.movies.slice(60, 70)}
            />
            <MovieCategory
              title="US TV Dramas"
              movies={state.movies.slice(0, 10)}
            />
          </>
        ) : (
          <p>Go to the home page</p>
        )}
      </div>
    </div>
  );
}

export default TvShows;
