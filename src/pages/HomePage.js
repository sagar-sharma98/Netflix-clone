import React from "react";
import Navbar from "../components/Navbar";
import MovieBox from "../components/MovieBox";
import Footer from "../components/Footer";
import MoviesContainer from "../components/MoviesContainer";

function HomePage() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <MovieBox />
      <MoviesContainer />
      <Footer />
    </div>
  );
}

export default HomePage;
