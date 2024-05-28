import React, { useContext } from "react";
import { loginAuth } from "../App";
import MovieCategory from "../components/MovieCategory";

function Movies() {
  const { state } = useContext(loginAuth);
  return (
    <div>
      <div style={{ margin: "0 4px", width: "100vw", height: "60vh", paddingTop: "6rem" }}>
        {state.movies.length > 0 ? (
          <>
           
            <MovieCategory
              title="Exciting Crime Comedies"
              movies={state.movies.slice(20, 30)}
            />
            <MovieCategory
              title="Gems for You"
              movies={state.movies.slice(30, 40)}
            />
            <MovieCategory
              title="Only on Netflix"
              movies={state.movies.slice(50, 60)}
            />
            <MovieCategory
              title="Chilly Thrillers"
              movies={state.movies.slice(70, 80)}
            />
          </>
        ) : (
          <p>Go to the home page</p>
        )}
      </div>
    </div>
  );
}

export default Movies;
