import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from "../Constant";

export function createContact(data) {
  return {
    type: ADD_CONTACT,
    payload: data,
  };
}

export function getContact(data) {
  return {
    type: GET_CONTACT,
    payload: data,
  };
}

export function updateContact(data) {
  return {
    type: UPDATE_CONTACT,
    payload: data,
  };
}

export function deleteContact(data) {
  return {
    type: DELETE_CONTACT,
    payload: data,
  };
}
