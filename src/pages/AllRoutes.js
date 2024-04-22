import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import TvShows from './TvShows';
import MyList from "./MyList";
import Popular from "./Popular";
import Signup from "./Signup";
import Movies from "./Movies";
import LogoutPage from "./LogoutPage";

function AllRoutes () {

    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/" element={<Movies/>}></Route>
            <Route path="/" element={<TvShows/>}></Route>
            <Route path="/" element={<Popular/>}></Route>
            <Route path="/" element={<MyList/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/logout" element={<LogoutPage/>}></Route>
        </Routes>
    )
}

export default AllRoutes;



