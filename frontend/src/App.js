import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import AppBar from "./components/AppBar";
import EditReview from "./routes/EditReview"


class App extends Component {
  render() {
    return (
      <main>
        <AppBar />
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/404" component={NotFound} />
            <Route path="/edit/review" component = {EditReview} />
            <Route path="/edit/profile" component = {EditReview} />
            <Route path="/classes" />
            <Redirect to="/404" />
        </Switch>
      </main>
    );
  }
}

export default App;
