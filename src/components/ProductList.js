import React, { Component } from 'react';
import ProductItem from './ProductItem'
import {connect} from 'react-redux'


class ProductList extends Component {


  render() {
    let arrayOfProducts=this.props?.user?.user_ratings?.map(product=><ProductItem token={this.props.token} user={this.props.user} key={product.id} product={product}/>)
    // console.log(arrayOfProducts)

    return (
         <table className="ui celled padded table">
            <thead className="">
                <tr className="">
                    <th className="">Product</th>
                    <th className="">Rating</th>
                    {/* <th className="single line">Sadness</th> */}
                    {/* <th className="">Joy</th> */}
                    {/* <th className="">Add</th> */}
                    <th className="">Update</th>
                    <th className="">Delete</th>
                </tr>
            </thead> 
            <tbody className="">
                {arrayOfProducts}
            </tbody>
        </table>
    );
  }
}
const mapStateToProps=(state) => {
    return{
        products:state.products.products,
        user:state.user.user,
        token:state.user.token
    }
}
export default connect(mapStateToProps)(ProductList);