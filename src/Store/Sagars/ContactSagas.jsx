import {
  ADD_CONTACT,
  ADD_CONTACT_RED,
  DELETE_CONTACT,
  DELETE_CONTACT_RED,
  GET_CONTACT,
  GET__CONTACT_RED,
  UPDATE_CONTACT,
  UPDATE_CONTACT_RED,
} from "../Constant";
import {
  createData,
  deleteData,
  getData,
  updateData,
} from "./Services/ContactService";
import { put, takeEvery } from "redux-saga/effects";

function* createSaga(action) {
  var response = yield createData(action.payload);
  yield put({ type: ADD_CONTACT_RED, payload: response });
}

function* getSaga() {
  var response = yield getData();
  yield put({ type: GET__CONTACT_RED, payload: response });
}

function* updateSaga(action) {
  var response = yield updateData(action.payload);
  yield put({ type: UPDATE_CONTACT_RED, payload: response });
}

function* deleteSaga(action) {
  yield deleteData(action.payload);
  yield put({ type: DELETE_CONTACT_RED, payload: action.payload });
}

export default function* contactSaga() {
  yield takeEvery(ADD_CONTACT, createSaga);
  yield takeEvery(GET_CONTACT, getSaga);
  yield takeEvery(UPDATE_CONTACT, updateSaga);
  yield takeEvery(DELETE_CONTACT, deleteSaga);
}
