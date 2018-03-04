import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import AppActions from '../actions/AppActions';

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Looking for a gift?</h1>
        <Button onClick={()=>{AppActions.changePage('detailForm')}}>Give me a suggestion</Button>
        <Button onClick={()=>{AppActions.changePage('shops')}}>Show me your stores</Button>
      </div>
    );
  }
}

export default Landing;
