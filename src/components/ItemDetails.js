import React, { Component } from 'react';
import {Button, Well, ListGroup, ListGroupItem} from 'react-bootstrap';
import AppActions from '../actions/AppActions';

class ItemDetails extends Component {
  render() {
    const product = {
      productName: 'Some Item',
      productImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Chocolate%28bgFFF%29.jpg/250px-Chocolate%28bgFFF%29.jpg',
      description: 'This is a product description'
    };
    return (
      <Well>
        <h4>{product.productName}</h4>
        <ListGroup>
          <ListGroupItem><img src={product.productImage}/></ListGroupItem>
          <ListGroupItem>Description: {product.description}</ListGroupItem>
        </ListGroup>
        <Button onClick={()=>AppActions.changePage('payment')}>Buy Me!</Button>
        <Button onClick={()=>AppActions.changePage('products')}>No Thanks :)</Button>
      </Well>
    );
  }
}

export default ItemDetails;
