import React from "react";
import { useDispatch, useSelector } from "react-redux"

import { State } from "../../store/reducer";
import { changeTemprature, setTempratures } from "../../store/actions"
import { Wrapper } from "./styles"

export default () => {
	const dispatch = useDispatch()
	const currentSetpoint = useSelector(({ currentSetpoint }: State): number => currentSetpoint)
	const increase = () => {
		const updated = currentSetpoint + 0.5
		dispatch(setTempratures({ currentSetpoint: updated }))
		dispatch(changeTemprature(updated))
	}
	const dicrease = () => {
		const updated = currentSetpoint - 0.5
		dispatch(setTempratures({ currentSetpoint: updated }))
		dispatch(changeTemprature(updated))
	}
  return (
    <Wrapper>
      <button onClick={dicrease}>-</button>
      <button onClick={increase}>+</button>
    </Wrapper>
  );
};
