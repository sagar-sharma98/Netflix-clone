import React, { useState, useEffect} from "react";
import "./SearchPage.css"
import { useParams } from "react-router-dom";
import Card from "../components/Card";


export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const { search } = useParams();
  const title = search[0].toUpperCase() + search.slice(1);
  console.log(search);

  const fetchMoviesData = async () => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ott/show?search={"title" : "${search}"}`,
        {
          headers: {
            projectId: "exn9j6ivl5cz",
          },
        }
      );
      const result = await response.json();
      console.log(result.data);
      setMovies(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, [search]);
  return (
    <div className="search-page">
      <h1>Search: {title}</h1>
      <div className="grid-container">
        {movies.map((movie, index) => (
          <Card key={index} movie={movie}  />
        ))}
      </div>
    </div>
  );
}
