import React, { Component } from 'react';

class Form extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {username, password} = this.state

    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <h1>{formName}</h1>
        <div className="equal width fields">
          <div className="field">
            <label>Username</label>
            <div className="ui fluid input"><input name="username" type="text" placeholder="Username" value={username} onChange={this.handleChange} /></div>
          </div>
          <div className="field">
            <label>Password</label>
            <div className="ui fluid input"><input name="password" type="password" placeholder="Password" value={password} onChange={this.handleChange} /></div>
          </div>
        </div>
        <div className="field"><button className="ui button">Submit</button></div>
      </form>
    );
  }

}


export default Form;