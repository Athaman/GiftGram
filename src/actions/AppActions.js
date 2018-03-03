import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import ProductsAPI from '../utils/ProductsAPI';
import ShopsAPI from '../utils/ShopsAPI';

export default {
  receiveProducts: () => {
    // ProductsAPI
    //   .getProducts() // TODO figure out products API
    //   .then(products => {
    //     AppDispatcher.dispatch({
    //       actionType: AppConstants.RECEIVE_PRODUCTS,
    //       products: products
    //     })
    //   }).catch(message => {
    //     AppDispatcher.dispatch({
    //       actionType: AppConstants.RECEIVE_PRODUCTS_ERROR,
    //       message: message
    //     })
    //   })

    AppDispatcher.dispatch({
      actionType: AppConstants.RECEIVE_PRODUCTS,
      products: ProductsAPI.getProducts()
    });
  },

  receiveShops: () => {
    // TODO legit api call will come back with a promise not an array of shops as per the mockup data
    // ShopsAPI
    //   .getShops() // TODO figure out products API
    //   .then(shops => {
    //     AppDispatcher.dispatch({
    //       actionType: AppConstants.RECEIVE_SHOPS,
    //       shops: shops
    //     })
    //   }).catch(message => {
    //     AppDispatcher.dispatch({
    //       actionType: AppConstants.RECEIVE_SHOPS_ERROR,
    //       message: message
    //     })
    //   })

    AppDispatcher.dispatch({
      actionType: AppConstants.RECEIVE_SHOPS,
      shops: ShopsAPI.getShops()
    });
  }
}
