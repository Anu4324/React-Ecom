import { ADD_WISHLIST, DELETE_WISHLIST, GET_WISHLIST } from "../Constant";

export function createWishlist(data) {
  return {
    type: ADD_WISHLIST,
    payload: data,
  };
}

export function getWishlist(data) {
  return {
    type: GET_WISHLIST,
    payload: data,
  };
}

// export function updateWishlist(data) {
//   return {
//     type: UPDATE_WISHLIST,
//     payload: data,
//   };
// }

export function deleteWishlist(data) {
  return {
    type: DELETE_WISHLIST,
    payload: data,
  };
}
