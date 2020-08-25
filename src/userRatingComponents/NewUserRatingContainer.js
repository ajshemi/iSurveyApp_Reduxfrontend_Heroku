import React, { Component } from "react";
import Product from "../components/Product";
import { connect } from "react-redux";
import { Grid, Card, GridColumn, Segment, Divider } from "semantic-ui-react";
import CommentInput from "../components/CommentInput";
import Comments from "../components/Comments";
import NewRatingContainer from "./NewRatingContainer";
import { saveUserToState } from "../Redux/actions";
import ProductList from "../components/ProductList";

class NewUserRatingContainer extends Component {
  //use the review_id to delete the review/rating/user association
  handleDeleteReview = (review_id) => {
    // if(this.props?.user){
    //   // console.log(this.props.user)
    //   // console.log(review_id)
    //   fetch(`http://localhost:3000/reviews/${review_id}`, {
    //     method: "DELETE",
    //     headers: {
    //       "Authorization": `bearer ${this.props.token}`
    //     }
    //   })
    //   .then(res => res.json())
    //   .then((review) => {
    //     // console.log(review)
    //     this.props.saveUserToState(review)
    //   }
    //   )
    // }
  };

  render() {
    //pass the app state as this.props.user
    let { user, error } = this.props;
    console.log(error);
    return (
      <div className="newratingdiv">
        <div className="">
          <h2>
            {user?.username ? `Welcome ${user.username}` : "Please login"}
          </h2>
          <NewRatingContainer user={this.props.user} />
        </div>
        <div className="">
          <h3>{`You've Rated ${
            user.user_ratings.length < 1 ? "No" : user.user_ratings.length
          } Product${user.user_ratings.length > 1 ? "s" : ""}`}</h3>
          {user.user_ratings.length < 1 ? "" : <ProductList />}
          {/* <Card.Group itemsPerRow={3}>
            {user?.user_ratings?.map(product => <Product handleDeleteReview={this.handleDeleteReview} key={product.review_id} product={product} user={user} />)}
          </Card.Group> */}
        </div>
        <div className="addcomment">
          <CommentInput />
        </div>
        <div>{Object.keys(error).length ? `Oops ${error}` : ""}</div>
        <div className="commentlist">
          <Comments user={this.props.user} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    token: state.user.token,
    error: state.error.errorMessage,
  };
};
export default connect(mapStateToProps, { saveUserToState })(
  NewUserRatingContainer
);
