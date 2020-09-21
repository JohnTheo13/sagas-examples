import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";
import rootSaga from "./sagas";
import * as action from "./actions";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
export { action };
