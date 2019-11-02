import React, { useState } from "react";

import "./login.style.css";
import { FormControl, TextField, Fab } from "@material-ui/core";
import { mdiGooglePlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  ACTION_SET_PASSWORD,
  ACTION_SET_EMAIL,
  ACTION_SUBMIT_LOGIN,
  ACTION_SET_LOGIN_ERROR
} from "../../redux/actions/signupAction";

const LoginPage = ({
  password,
  email,
  loginErr,
  ACTION_SET_PASSWORD,
  ACTION_SET_EMAIL,
  ACTION_SUBMIT_LOGIN,
  ACTION_SET_LOGIN_ERROR
}) => {
  const [missingErr, setMissingErr] = useState(false);

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
              onChange={e => {
                resetErr();
                ACTION_SET_EMAIL(e.target.value);
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
              onChange={e => {
                resetErr();
                ACTION_SET_PASSWORD(e.target.value);
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
                  ? ACTION_SUBMIT_LOGIN()
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
            <Icon path={mdiGooglePlusBox} size={2} color="red" />
          </section>
        </section>
      </section>
    </div>
  );
};

const mapStateToProps = ({ singupState }) => singupState;

const mapDispatchToProps = dispatch => {
  return {
    ACTION_SET_PASSWORD: password => dispatch(ACTION_SET_PASSWORD(password)),
    ACTION_SET_EMAIL: email => dispatch(ACTION_SET_EMAIL(email)),
    ACTION_SUBMIT_LOGIN: () => dispatch(ACTION_SUBMIT_LOGIN()),
    ACTION_SET_LOGIN_ERROR: value => dispatch(ACTION_SET_LOGIN_ERROR(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
