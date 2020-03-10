import React, { Component } from 'react'

export default class Sort extends Component {

    handleChange = (e) => {
        // console.log(e)
        this.props.handleSort(e.target.value)
    }
    render() {
        return (
            <div>
                {/* <label> Greased? </label>
                    <input type="checkbox" value="greased" onChange={this.handleChange}/> */}
                <label>
                    <strong>Sort:</strong>
                    <select onChange={this.handleChange}>
                    <option value="All"> All</option>
                    <option value="length">length</option>
                    <option value="user">user</option>
                    {/* <option value="3">3</option> */}
                    </select>
                </label>
            </div>
        )
    }
}