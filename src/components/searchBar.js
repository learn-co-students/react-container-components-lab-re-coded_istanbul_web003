import React, {Component} from "react";

export default class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            query: props.searchQuery
        }

    }
    
    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }
    render(){
        return(
        <form onSubmit={(e) => this.props.onSubmit(e, this.state.query)}>
            <input onChange={this.handleChange} value={this.state.query} placeholder="Search Reviews"></input>
            <button>Search</button>
        </form>
        )
    }
}