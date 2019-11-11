import React, { useState } from "react";

import "./login.style.css";
import { FormControl, TextField, Fab } from "@material-ui/core";
import { mdiGooglePlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from "js-cookie";

import { SUBMIT_GOOGLE_OAUTH2_SIGNUP } from "../../redux/actions/signupAction";
import { ACTION_SET_USER_EVENT_CALENDAR } from "../../redux/actions/userCalendarAction";


import { setUser } from '../../redux/actions/userAction';
import { setToken } from '../../redux/actions/tokenAction';
import { initializeUsers } from '../../redux/actions/usersAction';

import loginService from '../../services/login';
import usersService from '../../services/users';

const LoginPage = ({
  // password,
  // email,
  loginErr,
  // ACTION_SET_PASSWORD,
  // ACTION_SET_EMAIL,
  // ACTION_SUBMIT_LOGIN,
  ACTION_SET_LOGIN_ERROR,
  SUBMIT_GOOGLE_OAUTH2_SIGNUP,
  // ACTION_SET_USER_EVENT_CALENDAR,
  setToken,
  setUser,
  history
}) => {
  const [missingErr, setMissingErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const validateInput = (email, password) => {
    if (email === "" || password === "") {
      setMissingErr(true);
      return false;
    }
    return true;
  };

  const resetErr = () => {
    if (missingErr) {
      setMissingErr(false);
    }
    if (loginErr) {
      ACTION_SET_LOGIN_ERROR("");
    }
  };

  const handleLogin = async () => {
    try {
      const login = await loginService.login({ email: email.trim(), password });
      Cookies.set('token', login.token)
      const userData = await usersService.getUser(login.data.id, login.token);
      setUser(userData);
      setToken(login.token); // TODO: DELETE ME + get token from Cookies? 
      // ACTION_SET_USER_EVENT_CALENDAR(login.data.id, login.token)
      history.push('/')
    } catch(exception) {
      setErrorMessage('Wrong password');
      // TODO: replace with material UI component: https://material-ui.com/components/snackbars/
      alert(exception);
    } 
  }

  return (
    <div className="signin-base-container">
      <h1 className="app-title">Kit - Keep In Touch</h1>
      <section className="signin-main-container">
        <div className="page-label">
          <p>Sign In</p>
        </div>
        <section className="main-form-container">
          <FormControl className="form-controller-container">
            <TextField
              id="standard-full-width"
              label="Email"
              style={{ marginTop: "2rem" }}
              placeholder="Enter email"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              error={missingErr === true}
              helperText={missingErr ? "Email cannot be blank" : ""}
              value = {email}
              onChange={({target}) => {
                resetErr();
                // ACTION_SET_EMAIL(e.target.value);
                setEmail(target.value)
              }}
            />
            <TextField
              id="standard-full-width"
              label="Password"
              style={{ marginTop: "2rem" }}
              placeholder="Enter password"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              error={missingErr === true}
              helperText={missingErr ? "Password cannot be blank" : ""}
              onChange={({target}) => {
                resetErr();
                // ACTION_SET_PASSWORD(e.target.value);
                setPassword(target.value)
              }}
            />
            <div>
              <p style={{ color: "red", fontSize: "0.75rem" }}>{loginErr}</p>
            </div>
            <Fab
              variant="extended"
              aria-label="like"
              style={{
                marginTop: "3rem",
                backgroundColor: "#ffdc00",
                color: "white",
                fontWeight: "bold"
              }}
              onClick={() => {
                validateInput(email, password)
                  ? handleLogin()
                  : setMissingErr(true);
              }}
            >
              Sign In
            </Fab>
          </FormControl>
          <section style={{ marginTop: "2rem" }}>
            <p>
              Don't have an account?
              <Link
                to="/signup"
                style={{
                  color: "#ffdc00",
                  textDecoration: "none",
                  marginLeft: "0.5rem"
                }}
              >
                Sign up
              </Link>
            </p>
            <p style={{ color: "#cccccc" }}>OR</p>
            <Icon
              path={mdiGooglePlusBox}
              size={2}
              color="red"
              className="google-auth"
              onClick={() => {
                SUBMIT_GOOGLE_OAUTH2_SIGNUP();
              }}
            />
          </section>
        </section>
      </section>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    user: state.user,
    users: state.user
  }
};

const mapDispatchToProps = {
  setUser,
  setToken,
  initializeUsers,
  SUBMIT_GOOGLE_OAUTH2_SIGNUP,
  // ACTION_SET_USER_EVENT_CALENDAR
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage));
