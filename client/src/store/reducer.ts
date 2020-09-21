import { createReducer } from "@reduxjs/toolkit";
import { setTempratures } from "./actions"

export type State = {
  currentSetpoint: number;
	currentTemp: number;
	timestamp: number;
}

const initialState = {
  currentSetpoint: 0,
	currentTemp: 0,
	timestamp: 0,
};



export default createReducer<State>(initialState, {
  [setTempratures.toString()]: (state, { payload }) => ({ ...state, ...payload }),
});
