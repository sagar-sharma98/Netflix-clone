import React, { useContext } from "react";
import { loginAuth } from "../App";
import MovieCategory from "../components/MovieCategory";

function Movies() {
  const { state } = useContext(loginAuth);
  return (
    <div>
      <div style={{ margin: "0 4px", width: "100vw", paddingTop: "6rem" }}>
        <MovieCategory
          title="Exciting Crime Comedies"
          movies={state.movies[6].movies}
        />
        <MovieCategory title="Gems for You" movies={state.movies[7].movies} />
        <MovieCategory
          title="Only on Netflix"
          movies={state.movies[3].movies}
        />
        <MovieCategory
          title="Chilly Thrillers"
          movies={state.movies[9].movies}
        />
      </div>
    </div>
  );
}

export default Movies;
