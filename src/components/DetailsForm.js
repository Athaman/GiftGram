import React, { Component } from 'react';
import {Panel, FormGroup, Button} from 'react-bootstrap';
import AppActions from '../actions/AppActions';

class DetailsForm extends Component {
  render() {
    return (
      <Panel>
        <Panel.Heading>Give us a few details</Panel.Heading>
        <Panel.Body>
          <form>
            <FormGroup>
              <input
                className="form-control"
                type="text"
                ref="gender"
                placeholder="Gender"
              />
            </FormGroup>
            <FormGroup>
              <input
                className="form-control"
                type="text"
                ref="age"
                placeholder="Age"
              />
            </FormGroup>
            <FormGroup>
              <input
                className="form-control"
                type="text"
                ref="price"
                placeholder="What price were you thinking?"
              />
            </FormGroup>
            <Button onClick={()=>AppActions.changePage('itemDetails')}>Submit</Button>
          </form>
        </Panel.Body>
      </Panel>
    );
  }
}

export default DetailsForm;
