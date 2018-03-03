import React, { Component } from 'react';
import {Button, Well, ListGroup, ListGroupItem} from 'react-bootstrap';

class ShopListItem extends Component {
  render() {
    const {shop} = this.props;
    return (
      <Well>
        <h4>{shop.shopName}</h4>
        <ListGroup>
          <ListGroupItem><img src={shop.shopPicture}/></ListGroupItem>
          <ListGroupItem>Description: {shop.shopDescription}</ListGroupItem>
        </ListGroup>
      </Well>
    );
  }
}

export default ShopListItem;
