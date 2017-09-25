import * as types from './actionTypes';
import roomInfo from '../helpers/data.json';

export function selectProduct(product, similarProduct) {
  return dispatch => {
    return dispatch(setSelectedProduct(product, similarProduct));
  };
}

export function setSelectedProduct(product, similarProduct) {
  let updatedProduct = Object.assign({}, product, similarProduct);
  return {
    type: types.SELECT_PRODUCT,
    selectedProduct: updatedProduct
  };
}
export function clearSelectedProduct() {
  return dispatch => {
    return dispatch(clearSelectedProductState());
  };
}
export function clearSelectedProductState() {
  return {
    type: types.CLEAR_SELECTED_PRODUCT,
    selectedProduct: {}
  };
}
export function useSimilarProductImage(newRoomData) {
  return dispatch => {
    return dispatch(setProductImage(newRoomData));
  };
}

export function setProductImage(newRoomData) {
  return {
    type: types.UPDATE_IMAGE,
    roomData: newRoomData
  };
}

export function receiveData(json) {
  return {
    type: types.RECEIVE_DATA,
    roomData: json
  };
}

export function fetchData() {
  return dispatch => {
    return dispatch(receiveData(roomInfo));
  };
}
