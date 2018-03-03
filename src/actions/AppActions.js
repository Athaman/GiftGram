import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import ProductsAPI from '../utils/ProductsAPI';

export default {
  receiveProducts: () => {
    ProductsAPI
      .getProducts() // TODO figure out products API
      .then(products => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECEIVE_PRODUCTS,
          products: products
        })
      }).catch(message => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECEIVE_PRODUCTS_ERROR,
          message: message
        })
      })
  }
}
