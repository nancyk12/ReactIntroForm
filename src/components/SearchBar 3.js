import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import movieStyle from "../pages/movieStyle.css"

function SearchBar(props){

    // setting up the state 
    const [input, setInput] = useState("");
    const [field, setField] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = e => {
        e.preventDefault();
        //show filtered results, call to function in App.js 
        //props.filterMovies(input, field);
        navigate(`/MoviePage`)
    } 

    return (
        <form id="movie-search" onSubmit={handleOnSubmit}>
            <label htmlFor="search">Search :</label>
            <input 
                type="text" 
                id="search" 
                name="search"
                value={input}
                onChange={e => setInput(e.target.value)}
                />
            <label htmlFor="title">Title</label>
            <input 
                type="radio" 
                id="title" 
                name="title"
                value="title"
                onChange={e => setField(e.target.value)}
                checked={field === "title"}
                />
            <label htmlFor="actors">Actors</label>
            <input 
                type="radio" 
                id="actors" 
                name="actors"
                value="actors"
                onChange={e => setField(e.target.value)}
                checked={field === "actors"}
                />
            <label htmlFor="plot">Plot</label>
            <input 
                type="radio" 
                id="plot" 
                name="plot"
                value="plot"
                onChange={e => setField(e.target.value)}
                checked={field === "plot"}
                />
            <button type="submit">
                Search
            </button>
        </form>
    );
}

export default SearchBar;

