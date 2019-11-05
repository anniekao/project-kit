import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import LandingPage from "./pages/landing/landing.component";
import HomePage from "./pages/home/home.component";
import LoginPage from "./pages/login/login.component";
import SignupPage from "./pages/signup/signup.component";
import ProfilePage from "./pages/profile/profile.component";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          {/* <Route exact path="/profile/:id" render={({match}) => <ProfilePage />} />  */}
          <Route exact path="/profile/:id" component={ProfilePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
