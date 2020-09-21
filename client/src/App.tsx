import React from "react";
import { Provider } from "react-redux";

import { Panel, Container, Buttons } from "./components";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <>
          <Panel />
          <Buttons />
        </>
      </Container>
    </Provider>
  );
}

export default App;
