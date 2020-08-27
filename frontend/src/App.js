import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import EditReview from "./routes/EditReview";
import AddReview from "./routes/AddReview";
import AddReview2 from "./routes/AddReview2";
import Reviews from "./routes/Reviews";
import Courses from "./routes/Courses";
import auth from "./services/authService";
import menuActions from "./utils/menuActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      open: false,
      openDrawer: false,
      drawerContent: <></>,
    };
    this.handleDialClick = menuActions.handleDialClick.bind(this);
    this.toggleDrawer = menuActions.toggleDrawer.bind(this);
    this.draw = menuActions.draw.bind(this);
    this.setDrawerContent = menuActions.setDrawerContent.bind(this);
    this.switchTo = menuActions.switchTo.bind(this);
    this.addMenu = menuActions.addMenu.bind(this);
  }

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" render={this.addMenu(Home, true)} />
          <Route path="/404" render={this.addMenu(NotFound)} />
          <Route path="/reviews/edit" render={this.addMenu(EditReview)} />
          <Route path="/reviews/add" render={this.addMenu(AddReview)} />
          <Route path="/reviews/add2" render={this.addMenu(AddReview2)} />
          <Route path="/profile/edit" render={this.addMenu(EditReview)} />
          <Route path="/courses" render={this.addMenu(Courses)} />
          <Route path="/reviews" render={this.addMenu(Reviews)} />
          <Redirect to="/404" />
        </Switch>
      </main>
    );
  }
}

export default App;
