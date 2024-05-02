import React from "react";
import Navbar from "../components/Navbar";
import MovieBox from "../components/MovieBox";
import Footer from "../components/Footer";
import MoviesContainer from "../components/MoviesContainer";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default HomePage;
