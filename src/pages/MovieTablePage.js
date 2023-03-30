
import Table from '../components/Table';
import { useOutletContext } from "react-router-dom";
const MovieTablePage = () => {
  const { movies } = useOutletContext();
      return (
        <div className="container">
          {""}
          <Table movies={movies}/>
        </div>
      );
    };
    


export default MovieTablePage;