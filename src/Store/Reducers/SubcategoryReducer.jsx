import {
  ADD_SUBCATEGORY_RED,
  DELETE_SUBCATEGORY_RED,
  GET__SUBCATEGORY_RED,
  UPDATE_SUBCATEGORY_RED,
} from "../Constant";

export default function SubcategoryReducer(state = [], action) {
  let newState, index;
  switch (action.type) {
    case ADD_SUBCATEGORY_RED:
      newState = state;
      newState.push(action.payload);
      return newState;
    case GET__SUBCATEGORY_RED:
      return action.payload;
    case UPDATE_SUBCATEGORY_RED:
      newState = state;
      index = newState.findIndex((x) => x.id === action.payload.id);
      newState[index].name = action.payload.name;
      return newState;
    case DELETE_SUBCATEGORY_RED:
      newState = state;
      index = newState.findIndex((x) => x.id === action.payload.id);
      newState.splice(index, 1);
      return newState;

    default:
      return state;
  }
}
