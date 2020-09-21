import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { PanelWrapper, ArrowDown, ArrowUp } from "./style";
import { action } from "../../store";
import { State } from "../../store/reducer";

export default () => {
  const dispatch = useDispatch();
  const [currentTemp, currentSetpoint] = useSelector(
    ({ currentTemp, currentSetpoint }: State): Array<number> => [
      currentTemp,
      currentSetpoint,
    ]
  );

  const firstUpdate = useRef(true);

  let interval: number;

  const intervalChange = (): void => {
    interval = setInterval(() => dispatch(action.requestTempratures()), 120000);
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      dispatch(action.requestTempratures())
    }
    intervalChange();
    return (): void => clearInterval(interval);
	});

  const tempDiff = currentTemp - currentSetpoint;
  return (
    <PanelWrapper>
      <h2>{currentTemp} °C</h2>
      <p>
        {tempDiff !== 0 && tempDiff < 0 && (<ArrowUp />)}
        {tempDiff !== 0 && tempDiff > 0 && (<ArrowDown />)}
        <span>{currentSetpoint}</span>
      </p>
    </PanelWrapper>
  );
};
