import {
  ADD_BRAND_RED,
  DELETE_BRAND_RED,
  GET__BRAND_RED,
  UPDATE_BRAND_RED,
} from "../Constant";

export default function BrandReducer(state = [], action) {
  let newState, index;
  switch (action.type) {
    case ADD_BRAND_RED:
      newState = state;
      newState.push(action.payload);
      return newState;
    case GET__BRAND_RED:
      return action.payload;
    case UPDATE_BRAND_RED:
      newState = state;
      index = newState.findIndex((x) => x.id === action.payload.id);
      newState[index].pic = action.payload.pic;
      return newState;
    case DELETE_BRAND_RED:
      newState = state;
      index = newState.findIndex((x) => x.id === action.payload.id);
      newState.splice(index, 1);
      return newState;

    default:
      return state;
  }
}
