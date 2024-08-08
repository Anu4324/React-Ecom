import { ADD_BRAND, DELETE_BRAND, GET_BRAND, UPDATE_BRAND } from "../Constant";

export function createBrand(data) {
  return {
    type: ADD_BRAND,
    payload: data,
  };
}

export function getBrand(data) {
  return {
    type: GET_BRAND,
    payload: data,
  };
}

export function updateBrand(data) {
  return {
    type: UPDATE_BRAND,
    payload: data,
  };
}

export function deleteBrand(data) {
  return {
    type: DELETE_BRAND,
    payload: data,
  };
}
