import React, { ReactChild } from "react";
import { Provider } from "react-redux";
import configureStore, { MockStore } from "redux-mock-store";

const mockStore = configureStore([]);

export const initial = {
  currentSetpoint: 0,
  currentTemp: 0,
  timestamp: 0,
};

export function makeTestStore(opts: any): MockStore {
  const store = mockStore({ ...initial, ...opts });
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
  return store;
}

export default ({
  mockedStore,
  children,
}: {
  mockedStore: MockStore;
  children: ReactChild;
}) => <Provider store={mockedStore}>{children}</Provider>;
