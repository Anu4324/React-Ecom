import {
  ADD_MAINCATEGORY,
  ADD_MAINCATEGORY_RED,
  DELETE_MAINCATEGORY,
  DELETE_MAINCATEGORY_RED,
  GET_MAINCATEGORY,
  GET__MAINCATEGORY_RED,
  UPDATE_MAINCATEGORY,
  UPDATE_MAINCATEGORY_RED,
} from "../Constant";
import {
  createData,
  deleteData,
  getData,
  updateData,
} from "./Services/MaincategoryService";
import { put, takeEvery } from "redux-saga/effects";

function* createSaga(action) {
  var response = yield createData(action.payload);
  yield put({ type: ADD_MAINCATEGORY_RED, payload: response });
}

function* getSaga() { 
  var response = yield getData();
  yield put({ type: GET__MAINCATEGORY_RED, payload: response });
}

function* updateSaga(action) {
  var response = yield updateData(action.payload);
  yield put({ type: UPDATE_MAINCATEGORY_RED, payload: response });
}

function* deleteSaga(action) {
  yield deleteData(action.payload);
  yield put({ type: DELETE_MAINCATEGORY_RED, payload: action.payload });
}

export default function* maincategorySaga() {
  yield takeEvery(ADD_MAINCATEGORY, createSaga);
  yield takeEvery(GET_MAINCATEGORY, getSaga);
  yield takeEvery(UPDATE_MAINCATEGORY, updateSaga);
  yield takeEvery(DELETE_MAINCATEGORY, deleteSaga);
}
