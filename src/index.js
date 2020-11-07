import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./containers/App";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
//import reportWebVitals from "./reportWebVitals";
import createSagaMiddleware from "redux-saga";
import fetchCountriesNameReducer from "./containers/Header/store/reducer";
import getCovidHistoryDataReducer from "./containers/CovidLineGraph/store/reducer";
import rootSaga from "./sagas";
const rootReducer = combineReducers({
  fetchCountriesNameReducer,
  getCovidHistoryDataReducer,
});
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
