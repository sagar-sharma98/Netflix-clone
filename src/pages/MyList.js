import React, { useContext } from "react";
import { loginAuth } from "../App";
import MovieCategory from "../components/MovieCategory";

function MyList () {
    const { state } = useContext(loginAuth);

    return (
        <div style={{width: "100vw", height: "60vh", paddingTop: "6rem"}}>
        <MovieCategory title="My List" movies={state.movies[0].movies.slice(0, 3)}/>
        </div>
    );
}

export default MyList;