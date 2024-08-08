import {
  ADD_WISHLIST_RED,
  DELETE_WISHLIST_RED,
  GET__WISHLIST_RED,
} from "../Constant";

export default function WishlistReducer(state = [], action) {
  let newState, index;
  switch (action.type) {
    case ADD_WISHLIST_RED:
      newState = state;
      newState.push(action.payload);
      return newState;
    case GET__WISHLIST_RED:
      return action.payload;
    // case UPDATE_WISHLIST_RED:
    //   newState = state;
    //   index = newState.findIndex((x) => x.id === action.payload.id);
    //   newState[index].pic = action.payload.pic;
    //   return newState;
    case DELETE_WISHLIST_RED:
      newState = state;
      index = newState.findIndex((x) => x.id === action.payload.id);
      newState.splice(index, 1);
      return newState;

    default:
      return state;
  }
}
