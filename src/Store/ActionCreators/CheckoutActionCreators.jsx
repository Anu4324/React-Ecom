import { ADD_CHECKOUT, DELETE_CHECKOUT, GET_CHECKOUT, UPDATE_CHECKOUT } from "../Constant";

export function createCheckout(data) {
  return {
    type: ADD_CHECKOUT,
    payload: data,
  };
}

export function getCheckout(data) {
  return {
    type: GET_CHECKOUT,
    payload: data,
  };
}

export function updateCheckout(data) {
  return {
    type: UPDATE_CHECKOUT,
    payload: data,
  };
}

export function deleteCheckout(data) {
  return {
    type: DELETE_CHECKOUT,
    payload: data,
  };
}
