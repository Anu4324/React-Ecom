import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, UPDATE_PRODUCT } from "../Constant";

export function createProduct(data) {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
}

export function getProduct(data) {
  return {
    type: GET_PRODUCT,
    payload: data,
  };
}

export function updateProduct(data) {
  return {
    type: UPDATE_PRODUCT,
    payload: data,
  };
}

export function deleteProduct(data) {
  return {
    type: DELETE_PRODUCT,
    payload: data,
  };
}