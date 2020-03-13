
import React from 'react'
import Product from './Product'
import { Route} from 'react-router'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Card } from 'semantic-ui-react'

class ProductContainer extends React.Component {
  renderProduct=(routerProps) => {
    let matchProduct=parseInt(routerProps.match.params.id)
    // console.log(matchProduct)
    let foundProduct=this.props.products.find(product=>product.id===matchProduct)
    if(foundProduct){
      return <Product key={foundProduct.id} product={foundProduct}/> 
    }
    else{
      return <p>NOT FOUND</p>
    }
    
  }

  render() {
    let productlinks=this.props?.products?.map((product,index)=><div role="listitem" className="item" key={`${product.id}-${index}`} ><Link to={`/products/${product.id}`}>{product.name}</Link></div>)
    // let arrayOfProducts = this.props?.products?.map(product => <Product key={product.id} product={product}/>)
    return (
      <div className="allproducts">
        {/* <Card.Group itemsPerRow={3}>
          { arrayOfProducts }
        </Card.Group> */}
        <div role="list" className="ui list">
          {productlinks}
        </div>
        {/* <Switch> */}
         <Route path="/products/:id" render={this.renderProduct}/>
         <Route path="/products/" render={ () => <p>click on a product</p> } />
        {/* </Switch> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products
    // user: state.user
  }
}

export default connect(mapStateToProps)(ProductContainer);