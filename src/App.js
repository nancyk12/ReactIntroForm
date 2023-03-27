import React from "react";
import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
/* class-based component called App
   extends inherits from React.Component
   in other words: tells App to behave like a component.
*/
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from "./components/Table";
import MovieForm from "./components/MovieForm";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";




// adding a comment to line 10

const DATA_URL = "https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json"

function App() {

  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  

  useEffect(() => {
    fetch(DATA_URL)
    .then((result) => result.json())
    .then((result) => {
      setMovies(result)
    })
  }, [])

  const handleAddMovie = (title, actors, plot, genre, imdbRating, year, director) => {
    const newMovie = {
      title,
      actors,
      plot,
      genre,
      imdbRating,
      year,
      director
    }

    setMovies([...movies, newMovie])
  }

  return (
    <div className="App">
      <NavBar />
      <Outlet context={[movies, handleAddMovie, setSearchResults, searchResults]}/>
    </div>
  );
  
}

export default App