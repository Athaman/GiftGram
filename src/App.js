import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Shops from './components/Shops';
import Products from './components/Products';
import Auth0Lock from 'auth0-lock';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      idToken: '',
      profile: {}
    }
  }

  static defaultProps = {
    clientId: process.env.REACT_APP_AUTH_API,
    domain: 'reactauth.au.auth0.com'
  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);

    // after authenticated
    this.lock.on('authenticated', (authResult) => {
      this.lock.getProfile(authResult.accessToken, (error, profile) => {
        if(error){
          console.log(error);
          return;
        }

        this.setData(authResult.idToken, profile);
      })
    });

    this.getData();
  }

  // set profile and token data
  setData(idToken, profile){
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    })
  }

  //  check for token and get profile data
  getData(){
    if(localStorage.getItem('idToken') !== null){
      this.setState({
        idToken: localStorage.getItem('idToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        console.log(this.state);
      })
    }
  }
  render() {
    let page;
    if(!this.state.idToken){
      this.lock.show();
    }
    return (
      <div className="App">
        <Header />
        <Products />
      </div>
    );
  }
}

export default App;
