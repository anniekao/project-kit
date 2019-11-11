import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from 'redux-persist/lib/integration/react';

import { Provider } from "react-redux";
// import store from "./redux/store";
// import persistor from "./redux/store";
// import * as storepersist from "./redux/store"
// import {store, persistor} from "./redux/store"

import LandingPage from "./pages/landing/landing.component";
import HomePage from "./pages/home/home.component";
import LoginPage from "./pages/login/login.component";
import SignupPage from "./pages/signup/signup.component";
import ProfilePage from "./pages/profile/profile.component";
import CalenderPage from "./pages/calender/calender.component"
import EventDetailsPage from './pages/event-details/event-details.component';
import EventHistoryPage from "./pages/event-history/event-history.component";
import EventContactsPage from "./pages/event-contacts/event-contacts.component";
import RedirectPage from "./pages/redirect/redirect.component"
import configureStore from "./redux/store"
let { store, persistor } = configureStore()

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          {/* <Route exact path="/profile/:id" render={({match}) => <ProfilePage />} />  */}
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/calendar" component={CalenderPage}/>
          {/* TODO: MAKE EVENT DETAILS MODAL INSTEAD OF STANDALONE PAGE */}
          <Route exact path="/event/details" component={EventDetailsPage} />
          <Route exact path="/history" component={EventHistoryPage} />
          <Route exact path="/events/:eventId/contacts" component={EventContactsPage} />
          <Route exact path="/qr-code/:id" component={RedirectPage} />
        </Switch>
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
