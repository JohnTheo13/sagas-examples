import { createAction } from "@reduxjs/toolkit";
import { State } from "./reducer";

export type Action = {
	type: string,
	payload: any,
}

export const setTempratures = createAction<State | { currentSetpoint: number }>("SET_TEMPRATURES");

export const requestTempratures = createAction("REQUEST_TEMPRATURES");

export const changeTemprature = createAction<number>('CHANGE_TEMPRATURE')
