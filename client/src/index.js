import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome";
import Streams from "./components/Streams";
import Signup from "./components/auth/Signup";
import reducers from "./reducers";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <App>
          <Route exact path="/" component={Welcome} />
          <Route path="/signup" component={Signup} />
          <Route path="/streams" component={Streams} />
        </App>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
