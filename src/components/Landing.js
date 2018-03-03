import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Looking for a gift?</h1>
        <Button>Surprise Me!</Button>
        <Button>Show me your stores</Button>
      </div>
    );
  }
}

export default Landing;
