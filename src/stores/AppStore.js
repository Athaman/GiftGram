import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _products = [];
let _shops = [];

function setProducts(products){
  _products = products;
}

function setShops(shops){
  _shops = shops;
}

class AppStoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }

  getProducts() {
    return _products;
  }

  getShops() {
    return _shops;
  }
}

const AppStore = new AppStoreClass();

AppStore.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case AppConstants.RECEIVE_PRODUCTS:
      setProducts(action.products);
      AppStore.emitChange()
      break;
    case AppConstants.RECEIVE_SHOPS:
      setShops(action.shops);
      AppStore.emitChange()
      break;
  }
});

export default AppStore;
