import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import ShopListItem from './ShopListItem';

function getShopListItem(shop){
  return (
    <ShopListItem key={shop.shopId} shop={shop} />
  )
}

class Shops extends Component {
  constructor(props){
    super(props);
    this.state = {
      shops: []
    }

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    AppActions.receiveShops();
  }

  componentWillUnmount(){
    AppStore.removeChangeListener(this.onChange);
  }

  onChange(){
    this.setState({
      shops: AppStore.getShops()
    }, function() {
      console.log(this.state);
    })
  }

  render() {
    let shopListItems;
    if(this.state.shops){
      shopListItems = this.state.shops.map(shop => getShopListItem(shop))
    }
    return (
      <div>
        <ListGroup>
          {shopListItems}
        </ListGroup>
      </div>
    );
  }
}

export default Shops;
