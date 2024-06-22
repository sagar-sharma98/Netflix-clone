import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import TvShows from "./TvShows";
import MyList from "./MyList";
import Popular from "./Popular";
import Signup from "./Signup";
import Movies from "./Movies";
import LogoutPage from "./LogoutPage";
import MovieSections from "../components/MovieSections";
import DummyLink from "./DummyLink";
import SearchPage from "./SearchPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<MovieSections/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="/tvshows" element={<TvShows />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/mylist" element={<MyList />}></Route>
        <Route path="/dummylink/:type" element={<DummyLink/>}></Route>
        <Route path="/searchpage/:search" element={<SearchPage/>}></Route>

      </Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/logout" element={<LogoutPage />}></Route>
    </Routes>
  );
}

export default AllRoutes;
