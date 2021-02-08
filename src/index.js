import React from "react";
import ReactDOM from "react-dom";
import "./less/style.less";
import App from "./App";
import { Provider} from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import CampingsReducer from "./js/redux/reducers/CampingsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(CampingsReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
, document.getElementById("root"));