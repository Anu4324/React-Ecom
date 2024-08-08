import {
  ADD_SUBCATEGORY,
  ADD_SUBCATEGORY_RED,
  DELETE_SUBCATEGORY,
  DELETE_SUBCATEGORY_RED,
  GET_SUBCATEGORY,
  GET__SUBCATEGORY_RED,
  UPDATE_SUBCATEGORY,
  UPDATE_SUBCATEGORY_RED,
} from "../Constant";
import {
  createData,
  deleteData,
  getData,
  updateData,
} from "./Services/SubcategoryService";
import { put, takeEvery } from "redux-saga/effects";

function* createSaga(action) {
  var response = yield createData(action.payload);
  yield put({ type: ADD_SUBCATEGORY_RED, payload: response });
}

function* getSaga() {
  var response = yield getData();
  yield put({ type: GET__SUBCATEGORY_RED, payload: response });
}

function* updateSaga(action) {
  var response = yield updateData(action.payload);
  yield put({ type: UPDATE_SUBCATEGORY_RED, payload: response });
}

function* deleteSaga(action) {
  yield deleteData(action.payload);
  yield put({ type: DELETE_SUBCATEGORY_RED, payload: action.payload });
}

export default function* subcategorySaga() {
  yield takeEvery(ADD_SUBCATEGORY, createSaga);
  yield takeEvery(GET_SUBCATEGORY, getSaga);
  yield takeEvery(UPDATE_SUBCATEGORY, updateSaga);
  yield takeEvery(DELETE_SUBCATEGORY, deleteSaga);
}
