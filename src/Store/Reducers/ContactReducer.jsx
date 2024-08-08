import {
  ADD_CONTACT_RED,
  DELETE_CONTACT_RED,
  GET__CONTACT_RED,
  UPDATE_CONTACT_RED,
} from "../Constant";

export default function ContactReducer(state = [], action) {
  let newState, index;
  switch (action.type) {
    case ADD_CONTACT_RED:
      newState = state;
      newState.push(action.payload);
      return newState;
    case GET__CONTACT_RED:
      return action.payload;
    case UPDATE_CONTACT_RED:
      newState = state;
      index = newState.findIndex((x) => x.id === action.payload.id);
      newState[index].pic = action.payload.pic;
      return newState;
    case DELETE_CONTACT_RED:
      newState = state;
      index = newState.findIndex((x) => x.id === action.payload.id);
      newState.splice(index, 1);
      return newState;

    default:
      return state;
  }
}
