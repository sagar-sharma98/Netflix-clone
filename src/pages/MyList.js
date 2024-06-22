import React, { useContext, useEffect } from "react";
import { loginAuth } from "../App";
import MovieCategory from "../components/MovieCategory";
import { useNavigate } from "react-router-dom";

function MyList () {
    const { state } = useContext(loginAuth);
    const navigate = useNavigate();
    console.log(state.movies);

    const token = localStorage.getItem("netflixusertoken");

    useEffect(() => {
        if(!token){
            navigate("/login")
        }
    }, []);

    return (
        <div style={{width: "100vw", minHeight: "60vh", paddingTop: "6rem"}}>
            {state.wishList.length > 0 ?<MovieCategory title="My List" movies={state.wishList} myList={true}/> :<p>Go to the home page</p> }
        
        </div>
    );
}

export default MyList;