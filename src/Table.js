/**
 * Table React Component
 * 
 */

/**
 * HTML REVIEW
 * thread -> table head
 * tr -> table row
 * th -> table header
 * tbody -> table body
 * td -> table cell
 */

import React, { Component } from "react";

/* 
create two simple function components to make 
our table more readable 
*/




//Table Header Component
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Title</th>
                <th>Actors</th>
                <th>Plot</th>
                <th>IMDB Rating</th>
                <th>Director</th>
                <th>Year</th>
                <th>Date Added</th>
            </tr>
        </thead>
    );
}

//Table Body Component
const TableBody = (props) => {

    
    //construct rows 
    // use map to iterate over each row and wrap it 
    // a html table row
    // registered an onClick listener to remove character
    const rows = props.data.map((row, index) => {
     return (
        <tr>
          <td>{row.title}</td>
          <td>{row.actors}</td>
          <td>{row.plot}</td>
          <td>{row.imdbRating}</td>
          <td>{row.director}</td>
          <td>{row.year}</td>
          <td>{row.dateAdded}</td>
          <td><button onClick={()=> props.removeMovie(index)}>Delete</button></td>
        </tr>
      )
    })
    //return rows wrapped in tbody
    return <tbody>{rows}</tbody>
}
// TABLE is our main Component
class Table extends Component {
    render(){
        //read props passed in from App.js
        const { 
            movieData, 
            removeMovie,
            filteredMovieData
        } = this.props;
      
        return (
           <table>
                <TableHeader/>
                <TableBody 
                  data={filteredMovieData > 0  ? filteredMovieData : movieData}
                  removeMovie={removeMovie} 
                 />
          </table>
          )
        }
      }

export default Table