import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import ProductListItem from './ProductListItem';

function getProductListItem(product){
  return (
    <ProductListItem key={product.id} product={product} />
  )
}

class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    }

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    AppActions.receiveProducts();
  }

  componentWillUnmount(){
    AppStore.removeChangeListener(this.onChange);
  }

  onChange(){
    this.setState({
      products: AppStore.getProducts()
    }, function() {
      console.log(this.state);
    })
  }

  render() {
    let productListItems;
    if(this.state.products){
      productListItems = this.state.products.map(product => getProductListItem(product))
    }
    return (
      <div>
        <ListGroup>
          {productListItems}
        </ListGroup>
      </div>
    );
  }
}

export default Products;
