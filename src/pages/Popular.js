import React, { useContext } from "react";
import { loginAuth } from "../App";
import MovieCategory from "../components/MovieCategory";


function Popular () {
    const { state } = useContext(loginAuth);
    return (
        <div style={{margin: "0 4px", width: "100vw", paddingTop: "6rem"}}>
        <MovieCategory title="New on Netflix" movies={state.movies[3].movies}/>
        <MovieCategory title="Coming Next Week" movies={state.movies[4].movies}/>
        <MovieCategory title="Coming This Week" movies={state.movies[8].movies}/>
        <MovieCategory title="Worth the Wait" movies={state.movies[9].movies}/>
        </div>
    );
}

export default Popular;