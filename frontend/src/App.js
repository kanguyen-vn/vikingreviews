import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import AppBar from "./components/AppBar";

class App extends Component {
  render() {
    return (
      <main>
        <AppBar />
        <Switch>
          <Route path="/404" component={NotFound} />
          <Route path="/" component={Home} exact />
          <Redirect to="/404" />
        </Switch>
      </main>
    );
  }
}

export default App;
