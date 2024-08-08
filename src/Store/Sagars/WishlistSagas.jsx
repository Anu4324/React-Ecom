import {
  ADD_WISHLIST,
  ADD_WISHLIST_RED,
  DELETE_WISHLIST,
  DELETE_WISHLIST_RED,
  GET_WISHLIST,
  GET__WISHLIST_RED
} from "../Constant";
import {
  createData,
  deleteData,
  getData
} from "./Services/WishlistService";
import { put, takeEvery } from "redux-saga/effects";

function* createSaga(action) {
  var response = yield createData(action.payload);
  yield put({ type: ADD_WISHLIST_RED, payload: response });
}

function* getSaga() {
  var response = yield getData();
  yield put({ type: GET__WISHLIST_RED, payload: response });
}

// function* updateSaga(action) {
//   var response = yield updateData(action.payload);
//   yield put({ type: UPDATE_WISHLIST_RED, payload: response });
// }

function* deleteSaga(action) {
  yield deleteData(action.payload);
  yield put({ type: DELETE_WISHLIST_RED, payload: action.payload });
}

export default function* wishlistSaga() {
  yield takeEvery(ADD_WISHLIST, createSaga);
  yield takeEvery(GET_WISHLIST, getSaga);
  // yield takeEvery(UPDATE_WISHLIST, updateSaga);
  yield takeEvery(DELETE_WISHLIST, deleteSaga);
}
 