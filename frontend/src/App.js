import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import EditReview from "./routes/EditReview";
import Departments from "./routes/Departments";
import Courses from "./routes/Courses";
import MenuButton from "./components/MenuButton";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <MenuButton home={true} />
                <Home />
              </div>
            )}
          />
          <Route path="/" component={MenuButton} />
          <Route path="/404" component={NotFound} />
          <Route path="/edit/review" component={EditReview} />
          <Route path="/edit/profile" component={EditReview} />
          <Route path="/courses" component={Courses} />
          <Route path="/departments" component={Departments} />
          <Redirect to="/404" />
        </Switch>
      </main>
    );
  }
}

export default App;
