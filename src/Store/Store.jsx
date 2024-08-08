import { configureStore } from "@reduxjs/toolkit";
import CreateSageMiddleware from "@redux-saga/core";

import RootReducer from "./Reducers/RootReducer";
import RootSaga from "./Sagars/RootSaga";

const sagaMiddleware = CreateSageMiddleware();

const Store = configureStore({
  reducer: RootReducer,
  middleware: () => [sagaMiddleware],
});

export default Store;
sagaMiddleware.run(RootSaga);
  