import { fork } from "redux-saga/effects";
import requestWatcher from "./getTempratures";
import setTemprature from "./setTemprature";

export default function* rootSaga() {
  yield fork(requestWatcher);
  yield fork(setTemprature);
}
