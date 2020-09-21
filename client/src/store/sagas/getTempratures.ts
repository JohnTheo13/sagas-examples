import { call, put, takeLatest } from "redux-saga/effects";

import { get } from "../../service/api";
import { setTempratures, requestTempratures } from "../../store/actions";
import { State } from "../../store/reducer";

export function* getData() {
  let isOk = false;
  while (true) {
    try {
      const response: State = yield call(get);
			yield put(setTempratures(response));
      isOk = true;
    } catch (error) {
      console.warn(error.message)
    }
    if (isOk) {
      break;
		}
  }
}

export default function* requestWatcher() {
  yield takeLatest(requestTempratures, getData);
}
