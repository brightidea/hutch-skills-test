import initialState from './initialState';
import {FETCH_DATA, RECEIVE_DATA, UPDATE_IMAGE} from '../actions/actionTypes';

export default function roomData(state = initialState, action) {
  let newState;
  switch (action.type) {
    case FETCH_DATA:
      return action;
    case RECEIVE_DATA:
      newState = action.roomData;
      return newState;
    case UPDATE_IMAGE:
      newState = action.roomData;
      console.log(newState);
      return newState;
    default:
      return state;
  }
}
