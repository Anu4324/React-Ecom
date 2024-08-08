import {
  ADD_BRAND,
  ADD_BRAND_RED,
  DELETE_BRAND,
  DELETE_BRAND_RED,
  GET_BRAND,
  GET__BRAND_RED,
  UPDATE_BRAND,
  UPDATE_BRAND_RED,
} from "../Constant";
import {
  createData,
  deleteData,
  getData,
  updateData,
} from "./Services/BrandService";
import { put, takeEvery } from "redux-saga/effects";

function* createSaga(action) {
  var response = yield createData(action.payload);
  yield put({ type: ADD_BRAND_RED, payload: response });
}

function* getSaga() {
  var response = yield getData();
  yield put({ type: GET__BRAND_RED, payload: response });
}

function* updateSaga(action) {
  var response = yield updateData(action.payload);
  yield put({ type: UPDATE_BRAND_RED, payload: response });
}

function* deleteSaga(action) {
  yield deleteData(action.payload);
  yield put({ type: DELETE_BRAND_RED, payload: action.payload });
}

export default function* subcategorySaga() {
  yield takeEvery(ADD_BRAND, createSaga);
  yield takeEvery(GET_BRAND, getSaga);
  yield takeEvery(UPDATE_BRAND, updateSaga);
  yield takeEvery(DELETE_BRAND, deleteSaga);
}
