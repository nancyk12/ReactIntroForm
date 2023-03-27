import { useEffect, useState } from "react";

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

// delete All Button simple component 
function DeleteAllButton(props) {
    return <button onClick={() => props.deleteAll()}> Delete All </button>
  }

 function App() {

  // we make a hook for movies into the state
  //because we are in a function
  const [movies, setMovies] = useState();
  //use effect is equivalent to "Component did Mount" runs
  //after a component has been rendered.
  //component first renders when it's created
  //also renders when a change happens to it
  useEffect(() => {

    //asynchronously request data
    // wait for promis to resolve
    //const movieData = []
    fetch(DATA_URL)
    .then((result) => result.json())
    .then((result) => {
        setMovies(result);
    });
  }, [])
  // when we pass [] to useEffect -> it only runs once in the beginning
  //we can subscript multiple fields for it to run on 

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  }

  const removeMovie = (toDelIdx) => {
    const filteredMovies = movies.filter((_, index) => {
      return index !== toDelIdx
    })
    setMovies(filteredMovies)
  }

  const filterMovies = (input, field) => {
    //show all films if there is no query
    // if (searchField.trim().length === 0 {
    // setMovies(moviesData);
    // return;
    // }

    const moviesFiltered = movies.filter((movie) =>{
      return movie[field].toLowerCase().includes(input.toLowerCase())
    })

    setMovies(moviesFiltered)
    }

    return (
      <div className = 'App'>
        <NavBar />
        <SearchBar 
          filterMovies={filterMovies}
        />
        <Table 
          movies={movies || []}
          removeMovie={removeMovie}
        />
        <MovieForm 
          addMovie={addMovie}
        />
      </div>
    );
  }


// class App extends Component {
//     //set initial state of components
//     state = {
//         movies: [ {
//             title: 'Star Wars',
//             actors: 'Harrison Ford',
//             plot: "Sci-Fi",
//             imdbRating: "5",
//             director: "George Lucas",
//             year: "1977",
//             dateAdded: "March 15, 2023"
//         },
//         {
//           title: 'Pretty Woman',
//           actors: 'Julia Roberts',
//           plot: "Romantic Comedy",
//           imdbRating: "5",
//           director: "Gary Marshall",
//           year: "1990",
//           dateAdded: "March 15, 2023"
//         },
//         {
//           title: 'ET',
//           actors: 'Drew Brrymore',
//           plot: "Sci-Fi",
//           imdbRating: "5",
//           director: "Steven Spielberg",
//           year: "1982",
//           dateAdded: "March 15, 2023"
//         },
//         {
//           title: 'The Wizard of Oz',
//           actors: 'Judy Garland',
//           plot: "Fantasy",
//           imdbRating: "5",
//           director: "Victor Flemings",
//           year: "1939",
//           dateAdded: "March 15, 2023"
//         },
//         ]
//         ,
//         filteredMovie :[]
//     }

//     // create simple funciton here to remove movie
// removeMovie = (index) => {
//     // now that we've defined this.state, we can use
//         const { movies } = this.state
        
//         // we can use setState up update the state
//         this.setState({
//             //removed movie at passed in index by
//             //returning a new list excluding that movie
//             movies: movies.filter((_, i) => {
//                 return i !== index
//             }),
//         })
//     }
//     //we add the handle submit here, because
//     // the movies in here
//     //NOTE ON SYNTAX: passing a movie to addMovie
//     // using (...) spread operator to unpack movies array and adding 
//     // a new movie
//     addMovie =  movie => {
//         this.setState({movies: [...this.state.movies, movie ]})
//     }

//     //delete all the movies
//     removeAllMovies = () => {
//         this.setState({movies:[]})
//     }

//     filterMovie = (searchInput, searchField) => {
//       let searchResult = this.state.movies.filter((movie) => {
//         return movie[searchField].includes(searchInput)
//       })
//       this.setState({filteredMovie: searchResult});
//     };

//      /* you always have a render function 
//      in a component. */
     
//   render() {

//     //make sure return only returns one html element!
//     // we are passing the movies from state
//     // and the removeMovie function that we wrote
//     // so table can use it later on
//     return (
//         <div className="container"> 
//           <SearchBar
//             filterMovie={this.filterMovie}/>
//           <Table 
//             movieData={this.state.movies} 
//             removeMovie={this.removeMovie}
//             filteredMovieData={this.state.filteredMovie} 
//           /> 
//           <DeleteAllButton deleteAll={this.removeAllMovies}/>
//           <MovieForm addMovie={this.addMovie}/>
//         </div>
//     )
//   }
// }


// make it accessible to the rest of your application
export default App