import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';
const PAGE_CHANGE_EVENT = 'pageChange';

let _products = [];
let _shops = [];
let _page = '';

function setProducts(products){
  _products = products;
}

function setShops(shops){
  _shops = shops;
}

function setPage(page){
  _page = page;
}

class AppStoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  emitPageChange() {
    this.emit(PAGE_CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  addPageChangeListener(callback){
    this.on(PAGE_CHANGE_EVENT, callback);
  }

  removePageChangeListener(callback){
    this.removeListener(PAGE_CHANGE_EVENT, callback);
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

  getPage() {
    return _page;
  }
}

const AppStore = new AppStoreClass();

AppStore.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case AppConstants.RECEIVE_PRODUCTS:
      setProducts(action.products);
      AppStore.emitChange();
      break;
    case AppConstants.RECEIVE_SHOPS:
      setShops(action.shops);
      AppStore.emitChange();
      break;
    case AppConstants.PAGE_CHANGE_EVENT:
      setPage(action.page);

      AppStore.emitPageChange();
  }
});

export default AppStore;
