import React, {Component} from 'react';

class Home extends Component  {

  render(){
  return (
    <div className="home">
    <h1 style={{color:'blue',textDecoration:'underline'}}>COOKIE SURVEY WEB APP</h1>
    {/* <h1 onClick={this.handleLogout}>logout</h1> */}
    <img src='/cookie-imgs/cookie_gif.gif' alt="cookie photo" />
    {/* <img src='/cookie-imgs/pexels-photo-2074122 copy.jpeg' alt="cookie photo" /> */}
      
    </div>
  );
};
}

export default Home;