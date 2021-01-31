import React, {Component} from 'react';
import { connect } from "react-redux";

class Home extends Component  {

  handleLogoutClick=()=>{
    this.props.handleLogout()
  }

  render(){
   
  return (
    <div className="home">
    <h1 style={{color:'blue',textDecoration:'underline'}}>COOKIE SURVEY WEB APP</h1>
    {/* <h1 onClick={this.handleLogout}>logout</h1> */}
    <img src='/cookie-imgs/cookie_gif.gif' alt="cookie" />
    {/* <img src='/cookie-imgs/pexels-photo-2074122 copy.jpeg' alt="cookie photo" /> */}
    {this.props?.token? <div><button style={{color:'blue',textDecoration:'underline'}} onClick={this.handleLogoutClick}>LOGOUT BUTTON</button></div>:"" }
    </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};

export default connect(mapStateToProps)(Home);