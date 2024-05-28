import React, { useContext } from "react";
import { loginAuth } from "../App";
import MovieCategory from "../components/MovieCategory";

function Popular() {
  const { state } = useContext(loginAuth);
  console.log(state.movies);
  return (
    <div
      style={{
        margin: "0 4px",
        width: "100vw",
        height: "60vh",
        paddingTop: "6rem",
      }}
    >
      {state.movies.length > 0 ? (
        <>
          {" "}
          <MovieCategory
            title="New on Netflix"
            movies={state.movies.slice(0, 10)}
          />
          <MovieCategory
            title="Coming Next Week"
            movies={state.movies.slice(20, 30)}
          />
          <MovieCategory
            title="Coming This Week"
            movies={state.movies.slice(50, 60)}
          />
          <MovieCategory
            title="Worth the Wait"
            movies={state.movies.slice(70, 80)}
          />
        </>
      ) : (
        <p>Go to the home page</p>
      )}
    </div>
  );
}

export default Popular;
