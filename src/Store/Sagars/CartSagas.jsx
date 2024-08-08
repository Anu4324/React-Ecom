import {
  ADD_CART,
  ADD_CART_RED,
  DELETE_CART,
  DELETE_CART_RED,
  GET_CART,
  GET__CART_RED,
  UPDATE_CART,
  UPDATE_CART_RED,
} from "../Constant";
import {
  createData,
  deleteData,
  getData,
  updateData,
} from "./Services/CartService";
import { put, takeEvery } from "redux-saga/effects";

function* createSaga(action) {
  var response = yield createData(action.payload);
  yield put({ type: ADD_CART_RED, payload: response });
}

function* getSaga() {
  var response = yield getData();
  yield put({ type: GET__CART_RED, payload: response });
}

function* updateSaga(action) {
  var response = yield updateData(action.payload);
  yield put({ type: UPDATE_CART_RED, payload: response });
}

function* deleteSaga(action) {
  yield deleteData(action.payload);
  yield put({ type: DELETE_CART_RED, payload: action.payload });
}

export default function* cartSaga() {
  yield takeEvery(ADD_CART, createSaga);
  yield takeEvery(GET_CART, getSaga);
  yield takeEvery(UPDATE_CART, updateSaga);
  yield takeEvery(DELETE_CART, deleteSaga);
}
