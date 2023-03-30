import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import "./App.css"

//import movie data file
//import movies from "./data/movies.json";
//usign react-router's built in context provider
// that makes the context accessible to all child routes across the application
import { Outlet } from 'react-router-dom';

/* class-based component called App
   extends inherits from React.Component
   in other words: tells App to behave like a component.
*/
import 'bootstrap/dist/css/bootstrap.min.css'
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

  const handleAddMovie = (
    title, 
    actors, 
    plot, 
    genre, 
    imdbRating, 
    year, 
    director
    ) => {
    const newMovie = {
      title,
      actors,
      plot,
      genre,
      imdbRating,
      year,
      director
    };

    setMovies([...movies, newMovie])
  }

  return (
    <div className="App">
      <NavBar/>
      <Outlet context={{movies, handleAddMovie, setSearchResults, searchResults}}
      />
    </div>
  );
  
}

export default App