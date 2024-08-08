import {
  ADD_CHECKOUT,
  ADD_CHECKOUT_RED,
  DELETE_CHECKOUT,
  DELETE_CHECKOUT_RED,
  GET_CHECKOUT,
  GET__CHECKOUT_RED,
  UPDATE_CHECKOUT,
  UPDATE_CHECKOUT_RED,
} from "../Constant";
import {
  createData,
  deleteData,
  getData,
  updateData,
} from "./Services/CheckoutService";
import { put, takeEvery } from "redux-saga/effects";

function* createSaga(action) {
  var response = yield createData(action.payload);
  yield put({ type: ADD_CHECKOUT_RED, payload: response });
}

function* getSaga() {
  var response = yield getData();
  yield put({ type: GET__CHECKOUT_RED, payload: response });
}

function* updateSaga(action) {
  var response = yield updateData(action.payload);
  yield put({ type: UPDATE_CHECKOUT_RED, payload: response });
}

function* deleteSaga(action) {
  yield deleteData(action.payload);
  yield put({ type: DELETE_CHECKOUT_RED, payload: action.payload });
}

export default function* checkoutSaga() {
  yield takeEvery(ADD_CHECKOUT, createSaga);
  yield takeEvery(GET_CHECKOUT, getSaga);
  yield takeEvery(UPDATE_CHECKOUT, updateSaga);
  yield takeEvery(DELETE_CHECKOUT, deleteSaga);
}
