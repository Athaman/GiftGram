import React, { Component } from 'react';
import {Button, Well, ListGroup, ListGroupItem} from 'react-bootstrap';

class ProductListItem extends Component {
  render() {
    const {product} = this.props;
    return (
      <Well>
        <h4>{product.name}</h4>
        <ListGroup>
          <ListGroupItem>Description: {product.description}</ListGroupItem>
        </ListGroup>
      </Well>
    );
  }
}

export default ProductListItem;
