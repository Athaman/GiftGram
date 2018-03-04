import React, { Component } from 'react';
import {Button, Well, ListGroup, ListGroupItem} from 'react-bootstrap';
import AppActions from '../actions/AppActions';

class ShopListItem extends Component {
  render() {
    const {shop} = this.props;
    return (
      <Well>
        <h4 onClick={()=>{AppActions.changePage('products')}}>{shop.shopName}</h4>
        <ListGroup>
          <ListGroupItem><img onClick={()=>AppActions.changePage('products')} src={shop.shopPicture}/></ListGroupItem>
          <ListGroupItem><p onClick={()=>AppActions.changePage('products')}>Description: {shop.shopDescription}</p></ListGroupItem>
        </ListGroup>
      </Well>
    );
  }
}

export default ShopListItem;
