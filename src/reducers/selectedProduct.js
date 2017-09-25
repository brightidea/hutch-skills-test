import initialState from './initialSelectedProduct';
import {SELECT_PRODUCT, SET_SELECTED_PRODUCT, CLEAR_SELECTED_PRODUCT} from '../actions/actionTypes';

export default function selectedProduct(state = initialState, action) {
  let newState;
  let selection;
  switch (action.type) {
    case SELECT_PRODUCT:
      return action;
    case SET_SELECTED_PRODUCT:
      selection = action.selectProduct;
      newState = Object.assign({}, ...this.state, selection);

      return newState;
    case CLEAR_SELECTED_PRODUCT:
      newState = Object.assign({}, ...state, {});
      return newState;
    default:
      return state;
  }
}
