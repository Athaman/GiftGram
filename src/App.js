import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Shops from './components/Shops';
import Products from './components/Products';
import ItemDetails from './components/ItemDetails';
import Landing from './components/Landing';
import Payment from './components/Payment';
import DetailsForm from './components/DetailsForm';
import Auth0Lock from 'auth0-lock';
import AppStore from './stores/AppStore';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      idToken: '',
      profile: {},
      page: 'landing'
    }

    this.changePage = this.changePage.bind(this);

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
      });

      this.lock.hide();

    });

    AppStore.addPageChangeListener(this.changePage);

    this.getData();
  }

  changePage(){
    let page = AppStore.getPage();
    this.setState({page: page});
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
      })
    }
  }
  render() {
    console.log(this.state);
    let pages = {
      landing: <Landing />,
      payment: <Payment />,
      detailForm: <DetailsForm />,
      itemDetails: <ItemDetails />,
      products: <Products />,
      shops: <Shops />
    };
    let page = pages[this.state.page];
    if(!this.state.idToken){
      this.lock.show();
    }
    return (
      <div className="App">
        <Header />
        {page}
      </div>
    );
  }
}

export default App;
