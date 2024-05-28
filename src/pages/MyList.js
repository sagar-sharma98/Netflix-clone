import React, { useContext } from "react";
import { loginAuth } from "../App";
import MovieCategory from "../components/MovieCategory";

function MyList () {
    const { state } = useContext(loginAuth);
    console.log(state.movies);

    return (
        <div style={{width: "100vw", height: "60vh", paddingTop: "6rem"}}>
            {state.wishList.length > 0 ?<MovieCategory title="My List" movies={state.wishList} myList={true}/> :<p>Go to the home page</p> }
        
        </div>
    );
}

export default MyList;