import React from 'react';
import { useOutletContext } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';

// title 
const Title = () => {
    return <h1>All Movies</h1>;
}

// Movie Form from table
const MovieTablePage = () => {
    const [movies,removeMovie,_, searchTable] = useOutletContext();
    return (
        <div>
            <Title />
            <h3>Search(Enter empty string to reset list)</h3>
            <SearchBar searchTable={searchTable}/>
            <br></br>
            <div>
                <Table movies={movies} deleteOne={removeMovie}/>
            </div>
        </div>
    )
}

export default MovieTablePage;