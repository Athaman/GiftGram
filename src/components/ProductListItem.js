import React, { Component } from 'react';
import {Button, Well, ListGroup, ListGroupItem} from 'react-bootstrap';
import AppActions from '../actions/AppActions';

class ProductListItem extends Component {
  render() {
    const {product} = this.props;
    return (
      <Well>
        <h4 onClick={()=>{AppActions.changePage('itemDetails')}}>{product.productName}</h4>
        <ListGroup>
          <ListGroupItem><img onClick={()=>{AppActions.changePage('itemDetails')}} src={product.productImage}/></ListGroupItem>
          <ListGroupItem><p onClick={()=>{AppActions.changePage('itemDetails')}}>Description: {product.description}</p></ListGroupItem>
        </ListGroup>
      </Well>
    );
  }
}

export default ProductListItem;
