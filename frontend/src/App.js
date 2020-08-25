import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import EditReview from "./routes/EditReview";
import AddReview from "./routes/AddReview";
import Reviews from "./routes/Reviews";
import Courses from './routes/Courses';
import Menu from "./components/Menu";

class App extends Component {
  state = { user: null };

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      console.log(user);
      this.setState({ user });
    } catch (ex) {
      console.log(ex);
    }
  }

  addMenu = (Component, home = false) => () => (
    <div>
      <Menu home={home} user={this.state.user} />
      <Component />
    </div>
  );

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={this.addMenu(Home, true)} />
          <Route path="/404" component={this.addMenu(NotFound)} />
          <Route path="/reviews/edit" component={this.addMenu(EditReview)} />
          <Route path="/reviews/add" component={this.addMenu(AddReview)} />
          <Route path="/profile/edit" component={this.addMenu(EditReview)} />
          <Route path="/courses" component={this.addMenu(Courses)} />
          <Route path="/reviews" component={this.addMenu(Reviews)} />
          <Redirect to="/404" />
        </Switch>
      </main>
    );
  }
}

export default App;
