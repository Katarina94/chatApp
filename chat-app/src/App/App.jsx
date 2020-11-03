import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

/* Pages */
import Home from "pages/Home";

/* Store */
import store from "store/index";

const App = () => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Redirect to="/" />
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
