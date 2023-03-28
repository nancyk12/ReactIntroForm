import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const MovieForm = () => {
    //set the initial state of the Form
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [actors, setActors] = useState("");
    const [plot, setPlot] = useState("");
    const [imdbRating, setimdb] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");
    const [dateAdded] = useState(Date().toString());
    const { addMovie } = useOutletContext();
  
    return (
      // const {title, setTitle} = useState("");
      // const {actors, setActors} = useState("");
      // const {plot, setPlot} = useState("");
      // const {imdbRating, setimdb} = useState("");
      // const {director, setDirector} = useState("");
      // const {year, setYear} = useState("");
      // const {dateAdded, setDateAdded} = useState(Date().toString());
  
      <div>
        <style type="text/css">
          {`
               
                 
                input{
                  display: flex;
                  justify-content:center;
                   align-items:center;
                
                }
                textarea {
                  display: flex;
                  justify-content:center;
                   align-items:center;
                }
                label {
                background-color: light-blue;
                height: 25px;
                width: 100px;
                }
                  `}
        </style>
        <label>
          <h3>Title</h3>
        </label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <label>
          <h3>Actors</h3>
        </label>
        <input
          type="text"
          onChange={(e) => {
            setActors(e.target.value);
          }}
        />
        <br />
        <label>
          <h3>Plot</h3>
        </label>
        <textarea
          type="text"
          onChange={(e) => {
            setPlot(e.target.value);
          }}
        />
        <br />
        <label>
          <h3>imdbRating</h3>
        </label>
        <input
          type="text"
          onChange={(e) => {
            setimdb(e.target.value);
          }}
        />
        <br />
        <label>
          <h3>Director</h3>
        </label>
        <input
          type="text"
          onChange={(e) => {
            setDirector(e.target.value);
          }}
        />
        <br />
        <label>
          <h3>Year</h3>
        </label>
        <input
          type="text"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            const movie = {
              title: title,
              actors: actors,
              plot: plot,
              imdbRating: imdbRating,
              director: director,
              year: year,
              dateAdded: dateAdded,
            };
  
            addMovie(movie);
            navigate("/movielist");
          }}
        >
          Submit
        </button>
      </div>
    );
  };
  
export default MovieForm