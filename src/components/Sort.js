import React, { Component } from 'react'

export default class Sort extends Component {

    handleChange = (e) => {
        // console.log(e)
        this.props.handleSort(e.target.value)
    }
    render() {
        return (
            <div>
                <label>
                    <strong>Sort:</strong>
                    <select onChange={this.handleChange}>
                    <option value="All"> All</option>
                    <option value="length">length</option>
                    <option value="user">user</option>
                    </select>
                </label>
            </div>
        )
    }
}