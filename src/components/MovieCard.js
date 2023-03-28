import { useOutletContext, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";


const MovieCard = () => {
  //access router context and params passed
  const { movies } = useOutletContext();
  const params = useParams();

  //get sign up entry from GET parameter passed
  const foundMovie = movies.find((movie) => {
    return movie.title === params.title;
  });

  console.log(foundMovie);
  console.log(foundMovie.title);


  return (
    <div>
      <style>
        {`
                Card {
                }
                `}
      </style>

      <Card style={{ width: "35rem" }}>
        <Card.Body>
          <Card.Title>{[foundMovie.title]}</Card.Title>
          <Card.Text>
            {" "}
            Plot:
            {[foundMovie.plot]}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          Actors:{" "}
          {[
            foundMovie.actors.map((actor) => {
              return <p>{actor}</p>;
            }),
          ]}
        </Card.Footer>
      </Card>
    </div>
  );
};
export default MovieCard;