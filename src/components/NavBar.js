import { Link } from "react-router-dom";
import './NavBar.css';



const NavBar = () => {
    return (
<div>
    <header className="header">  
        <Link to="/">Home</Link>
        <Link to="/allMovies">Movie List</Link>
        <Link to="/addMovie">Add Movie</Link>
        <Link to="/MovieSearch">Search for a Movie</Link>
    </header>   
</div>



    )
}

export default NavBar;
