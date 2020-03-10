import React, { Component } from 'react';
class Filter extends Component {
    handleChange=(e) => {
        // console.log(e.target.value)
        this.props.handleFilter(e.target.value)
    }
    render() {  
        return (
      <div>
            <strong>Filter by:</strong>
            <label>
                <input type="radio" value="currentUser" checked={"currentUser"===this.props.currentUser} onChange={this.handleChange}/>
                currentUser
            </label>
            <label>
                <input type="radio" value="allUsers" checked={"allUsers"===this.props.currentUser} onChange={this.handleChange}/>
                allUsers
            </label>
      </div>
        );
    }
}
 
export default Filter;