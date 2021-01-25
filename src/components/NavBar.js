import React from "react";
import { NavLink } from "react-router-dom";
// import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
// import userReducer from "../Redux/userReducer";

const NavBar = (props) => {
  return (
    <nav>
      <NavLink
        to="#"
        className="toggle-button"
        onClick={() => {
          document.querySelector("ul.nav").classList.toggle("active");
        }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </NavLink>
      <ul className="nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {!props?.token ? (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        ) : (
          ""
        )}
        {!props?.token ? (
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        ) : (
          ""
        )}
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        {props?.token ? (
          <li>
            <NavLink to="/newrating">Rating</NavLink>
          </li>
        ) : (
          ""
        )}
        {props?.token && props.comments.length ? (
          <li>
            <NavLink to="/allcomments">AllComments</NavLink>
          </li>
        ) : (
          ""
        )}
        {props?.token && props.comments.length ? (
          <li>
            <NavLink to="/analysis">CommentAnalysis</NavLink>
          </li>
        ) : (
          ""
        )}
        {props?.token && props.comments.length ? (
          <li>
            <NavLink to="/charts">Charts</NavLink>
          </li>
        ) : (
          ""
        )}
        {props?.token ? (
          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        ) : (
          ""
        )}
        {props?.token && props.user.user_ratings.length === 3 ? (
          <li>
            <NavLink to="/ratingsummary">RatingSummary</NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    token: state.user.token,
    comments: state.comments.allcomments,
    onerating: state.ratings.onerating,
  };
};
export default connect(mapStateToProps)(NavBar);