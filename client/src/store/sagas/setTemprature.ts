import { call, debounce } from "redux-saga/effects";

import { patch } from "../../service/api";
import { changeTemprature, Action } from "../../store/actions";

export function* getData(action: Action) {
	const { payload } = action;
	let isOk = false
  while (true) {
    try {
      isOk = yield call<any>(patch, payload);
    } catch (error) {
      console.log(error.message);
    }
    if (isOk) {
			break;
    }
  }
}

export default function* setTemprature() {
  yield debounce<any>(300, changeTemprature, getData);
}
