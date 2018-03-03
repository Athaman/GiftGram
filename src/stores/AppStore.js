import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _products = [];

class AppStoreClass extends EventEmitter {
  emitChagne() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback){
    this.removeLisener(CHANGE_EVENT, callback);
  }

  getProducts() {
    return _products;
  }
}
