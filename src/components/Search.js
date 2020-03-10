import React, { Component } from 'react';

class Search extends Component {

    handleChange=(e) => {
        // console.log(e.target.value)
        this.props.handleInput(e.target.value)
    }

    render() { 
        return ( 
            <div className="ui search">
                <strong>Search:</strong>
            <div className="ui icon input">
                <input className="prompt" value={this.props.searchTerm} onChange={this.handleChange} />
                <i className="search icon" />
            </div>
            </div>
         );
    }
}
export default Search;