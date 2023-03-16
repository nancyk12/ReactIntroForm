import React, { Component} from "react";

class Search extends Component{
    constructor(props){
        super(props)
        this.initialState = {
            search: '',
            field: '' 
        }
        this.state = this.initialState;
    }

    handleChange = event => {
        //get name, value out of target (element that changed)
        const { name, value } = event.target;

        //update our state 
        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {
        //standard code for onSubmits 
        event.preventDefault();
        //set the current state of our form to the handle submit
        this.props.filterMovie(this.state.search, this.state.field);

        //clear inputs by setting form to inital state
        this.setState(this.initalState);


    }
    render(){
        //const {title, director} = this.state;

        return(
            <div>   
                <h1>Search</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        type = "text" 
                        id="search" 
                        name="search" 
                        value={this.state.search}
                        onChange = {this.handleChange}

                    />
                    <button type = "submit" > Search</button>
                    <br/>
                    <label>Title</label>
                    <input 
                        type = "radio" 
                        id="title" 
                        name="field"
                        value="title"
                        autocomplete = "off"
                        checked = {this.state.field === "title"}
                        onChange = {this.handleChange}
                    />
                    <label>Director</label>
                    <input 
                        type = "radio" 
                        id="director" 
                        name="field"
                        value="director"
                        autocomplete = "off"
                        checked = {this.state.field === "director"}
                        onChange = {this.handleChange}

                    />
                </form>


            </div>



        )
    }
}
//onClick={() => this.props.filterMovie(movie)}
export default Search;

