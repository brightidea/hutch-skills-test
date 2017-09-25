import {combineReducers} from 'redux';
import roomData from './productReducer';
import selectedProduct from './selectedProduct';

const rootReducer = combineReducers({
  roomData,
  selectedProduct
});

export default rootReducer;
