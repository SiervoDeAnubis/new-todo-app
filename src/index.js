import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { reducer } from "./store";
import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
