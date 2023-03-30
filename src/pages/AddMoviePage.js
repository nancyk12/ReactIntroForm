import MovieForm from "../components/MovieForm";
import { useOutletContext } from "react-router-dom";


function AddMoviePage(){
  const { handleAddMovie} = useOutletContext();

    return (
    <div>
        <h1>Add a new movie to the list.</h1>
            <MovieForm handleAddMovie={handleAddMovie}/>
          </div>
        );
      }
      

export default AddMoviePage;