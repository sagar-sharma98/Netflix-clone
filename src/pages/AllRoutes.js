import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import TvShows from './TvShows';
import MyList from "./MyList";
import Popular from "./Popular";
import Signup from "./Signup";
import Movies from "./Movies";

function AllRoutes () {

    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/" element={<Movies/>}></Route>
            <Route path="/" element={<TvShows/>}></Route>
            <Route path="/" element={<Popular/>}></Route>
            <Route path="/" element={<MyList/>}></Route>
            <Route path="/" element={<Signup/>}></Route>
            <Route path="/" element={<Login/>}></Route>
        </Routes>
    )
}

export default AllRoutes;
