import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import EditReview from "./routes/EditReview";
import Departments from "./routes/Departments";
import Reviews from './routes/Reviews';
import Menu from "./components/Menu";

class App extends Component {
  addMenu = (Component, home = false) => () => (
    <div>
      <Menu home={home} />
      <Component />
    </div>
  );

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={this.addMenu(Home, true)} />
          <Route path="/404" component={this.addMenu(NotFound)} />
          <Route path="/review/edit" component={this.addMenu(EditReview)} />
          <Route path="/profile/edit" component={this.addMenu(EditReview)} />
          <Route path="/reviews" component={this.addMenu(Reviews)} />
          <Redirect to="/404" />
        </Switch>
      </main>
    );
  }
}

export default App;
