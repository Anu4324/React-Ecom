import {
  ADD_CART_RED,
  DELETE_CART_RED,
  GET__CART_RED,
  UPDATE_CART_RED,
} from "../Constant";

export default function CartReducer(state = [], action) {
  let newState, index;
  switch (action.type) {
    case ADD_CART_RED:
      newState = state;
      newState.push(action.payload);
      return newState;
    case GET__CART_RED:
      return action.payload;
    case UPDATE_CART_RED:
      newState = state;
      index = newState.findIndex((x) => x.id === action.payload.id);
      newState[index].pic = action.payload.pic;
      return newState;
    case DELETE_CART_RED:
      newState = state;
      index = newState.findIndex((x) => x.id === action.payload.id);
      newState.splice(index, 1);
      return newState;

    default:
      return state;
  }
}
