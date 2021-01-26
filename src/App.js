import React from "react";
import { Switch, Route } from "react-router";

import { withRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Form from "./components/Form";
import NavBar from "./components/NavBar";
// import Header from "./components/Header";
import Home from "./components/Home";
import ProductContainer from "./components/ProductContainer";
import AllCommentsContainer from "./components/AllCommentsContainer";
// import UserRatingContainer from './userRatingComponents/UserRatingContainer'
// import RatingContainer from './userRatingComponents/RatingContainer'
// import NewRatingContainer from './userRatingComponents/NewRatingContainer'
import NewUserRatingContainer from "./userRatingComponents/NewUserRatingContainer";
// import WatsonSentimentContainer from './watsoncomponents/WatsonSentimentContainer'
// import WatsonEmotionContainer from './watsoncomponents/WatsonEmotionContainer'
import AnalysisContainer from "./components/AnalysisContainer";
import RatingSummaryContainer from "./components/RatingSummaryContainer";

import ChartsContainer from "./components/ChartsContainer";
import PageNotFound from "./components/PageNotFound";

import { connect } from "react-redux";
import {
  clearallEmotionsFromState,
  clearSentimentFromState,
  clearUserFromState,
  addProductsToState,
  saveUserToState,
  addAllCommentsToState,
  addAllSentimentsToState,
  addAllEmotionsToState,
} from "./Redux/actions";

class App extends React.Component {
  componentDidMount() {
    //render products and comments when app loads
    
    // fetch("https://cookiesurveywebapp.herokuapp.com/products")
    fetch("http://localhost:3000/products")
      .then((r) => r.json())
      .then((products) => {
        // console.log(products)
        this.props.addProductsToState(products);
      });

    // fetch("https://cookiesurveywebapp.herokuapp.com/comments")
    fetch("http://localhost:3000/comments")
      .then((r) => r.json())
      .then((allcomments) => {
        this.props.addAllCommentsToState(allcomments);
      });

    // fetch("https://cookiesurveywebapp.herokuapp.com/watson_sentiments")
    fetch("http://localhost:3000/watson_sentiments")
      .then((r) => r.json())
      .then((allsentiments) => {
        this.props.addAllSentimentsToState(allsentiments);
      });

    // fetch("https://cookiesurveywebapp.herokuapp.com/watson_emotions")
    fetch("http://localhost:3000/watson_emotions")
      .then((r) => r.json())
      .then((allemotions) => {
        this.props.addAllEmotionsToState(allemotions);
      });

    //persist when token exist
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token");
      // fetch("https://cookiesurveywebapp.herokuapp.com/persist", {
        fetch("http://localhost:3000/persist",{
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((resp) => {
          if (resp.token) {
            this.props.saveUserToState(resp);
          }
        });
    }
  }

  handleLoginSubmit = (user) => {
    //login with username and password
    // fetch("https://cookiesurveywebapp.herokuapp.com/login", {
      fetch("http://localhost:3000/login",{
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((resp) => {
        if (resp.token) {
          this.props.saveUserToState(resp);
          localStorage.setItem("token", resp.token);
          this.props.history.push("/products");
        }
      });

    // this.refreshPage()
  };

  handleRegisterSubmit = (user) => {
    //
    // fetch("https://cookiesurveywebapp.herokuapp.com/users", {
      fetch("http://localhost:3000/users",{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((r) => r.json())
      .then((resp) => {
        if (resp.token) {
          // console.log(resp)
          this.props.saveUserToState(resp);
          localStorage.setItem("token", resp.token);
          this.props.history.push("/products");
        }
      });
    // this.refreshPage()
  };
  renderForm = (routerProps) => {
    if (routerProps.location.pathname === "/login") {
      return (
        <Form formName="Login Form" handleSubmit={this.handleLoginSubmit} />
      );
    } else if (routerProps.location.pathname === "/signup") {
      return (
        <Form formName="SignUp Form" handleSubmit={this.handleRegisterSubmit} />
      );
    }
  };
  // refreshPage=() =>{
  //   window.location.reload(false);
  // }

  handleLogout = (routerProps) => {
    if (routerProps.location.pathname === "/logout") {
      localStorage.clear();
      this.props.clearUserFromState();
      // this.props.clearProductsFromState()
      // this.props.clearallCommentsFromState()
      // this.props.clearSentimentFromState()
      // this.props.clearallEmotionsFromState()

      return <Home />;
    }
  };

  render() {
    // console.log(this.props);
    return (
      <Container>
        {/* <div className="App"> */}
        {/* <Header/> */}
        <NavBar />
        <Switch>
          <Route path="/login" render={this.renderForm} />
          <Route path="/signup" render={this.renderForm} />
          <Route path="/products" component={ProductContainer} />
          <Route path="/newrating" component={NewUserRatingContainer} />
          <Route path="/allcomments" component={AllCommentsContainer} />
          <Route path="/charts" component={ChartsContainer} />
          <Route path="/analysis" component={AnalysisContainer} />
          <Route path="/ratingsummary" component={RatingSummaryContainer} />
          <Route path="/logout" render={this.handleLogout} />
          <Route path="/" exact render={() => <Home />} />
          <Route render={() => <PageNotFound />} />
        </Switch>
        {/* </div> */}
      </Container>
    );
  }
}
// const mapStateToProps=(state) => {
//   return{
//     user:state.user
//   }
// }

export default connect(null, {
  clearallEmotionsFromState,
  clearSentimentFromState,
  clearUserFromState,
  addProductsToState,
  saveUserToState,
  addAllCommentsToState,
  addAllSentimentsToState,
  addAllEmotionsToState,
})(withRouter(App));
