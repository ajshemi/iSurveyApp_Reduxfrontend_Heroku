import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import userReducer from '../Redux/userReducer';

const NavBar = (props) => {
  return(
    <ul className="nav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    { !props.token?  <li>
        <NavLink to="/login">Login</NavLink>
      </li> : ""}
      { !props.token ? <li>
        <NavLink to="/register">Register</NavLink>
      </li> : ""
      }
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
        {/* {props.token ?  <li>
        <NavLink to="/rating">UserRating</NavLink>
      </li> : ""} */}
      {props.token ?  <li>
        <NavLink to="/newrating">Rating</NavLink>
      </li> : ""}
      {props.token && props.comments.length ? <li>
        <NavLink to="/allcomments">AllComments</NavLink>
      </li> :""}
      {/* <li>
        <NavLink to="/usersentiment">UserSentiment</NavLink>
      </li> */}
      {props.token && props.comments.length ? <li>
        <NavLink to="/analysis">CommentAnalysis</NavLink>
      </li> : ""}
      {props.token && props.comments.length ? <li>
        <NavLink to="/charts">Charts</NavLink>
      </li> :""}
      {props.token ? <li>
        <NavLink to="/logout">Logout</NavLink>
      </li> :""}
      {props.token && (props.user.user_ratings.length===3) ? <li>
        <NavLink to="/ratingsummary">RatingSummary</NavLink>
      </li> : ""}


    </ul>
  )
};
const mapStateToProps =(state) => {
  return {
    user:state.user.user,
    token:state.user.token,
    comments:state.comments.allcomments,
    onerating:state.ratings.onerating
  }
}
export default connect(mapStateToProps)(NavBar);

{/* <div class="ui menu">
  <a class="item">Editorials</a>
  <a class="item">Reviews</a>
  <a class="item">Upcoming Events</a>
</div> */}