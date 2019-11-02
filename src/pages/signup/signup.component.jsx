import React, { useState } from "react";

import "./signup.style.css";
import { FormControl, TextField, Fab } from "@material-ui/core";
import { mdiGooglePlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  ACTION_SET_PASSWORD,
  ACTION_SET_CONFIRM_PASSWORD,
  ACTION_SET_EMAIL,
  ACTION_SUBMIT_LOGIN
} from "../../redux/actions/signupAction";

const SignupPage = ({
  email,
  password,
  confirmedPassword,
  ACTION_SET_PASSWORD,
  ACTION_SET_CONFIRM_PASSWORD,
  ACTION_SET_EMAIL,
  ACTION_SUBMIT_LOGIN
}) => {
  const [err, setErr] = useState(false);
  const [missingErr, setMissingErr] = useState(false);

  const validatePassword = (pass, cpassword) => {
    console.log("password is now " + password);
    console.log("confirmedPassword is now " + confirmedPassword);
    return pass === cpassword;
  };

  const resetErr = () => {
    if (err) {
      setErr(false);
    }
    if (missingErr) {
      setMissingErr(false);
    }
  };

  const validateInput = (email, password, confirmedPassword) => {
    if (email === "" || password === "" || confirmedPassword === "") {
      setMissingErr(true);
      return false;
    }
    return true;
  };

  return (
    <div className="signup-base-container">
      <h1 className="app-title">Kit - Keep In Touch</h1>
      <section className="signup-main-container">
        <div className="page-label"></div>
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
              helperText={missingErr ? "Email cannot be blank" : ""}
              error={missingErr === true}
              onChange={e => {
                resetErr(err);
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
              helperText={missingErr ? "Password cannot be blank" : ""}
              error={missingErr === true}
              onChange={e => {
                resetErr(err);
                ACTION_SET_PASSWORD(e.target.value);
              }}
            />
            <TextField
              id="standard-full-width"
              label="Confirm Password"
              style={{ marginTop: "2rem" }}
              placeholder="Enter password"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              error={err === true}
              helperText={err ? "Password does not match" : ""}
              onChange={e => {
                resetErr(err);
                ACTION_SET_CONFIRM_PASSWORD(e.target.value);
              }}
            />
            <Fab
              variant="extended"
              aria-label="like"
              style={{
                marginTop: "2rem",
                backgroundColor: "#ffdc00",
                color: "white",
                fontWeight: "bold"
              }}
              onClick={() => {
                if (validateInput(email, password, confirmedPassword)) {
                  validatePassword(password, confirmedPassword)
                    ? ACTION_SUBMIT_LOGIN()
                    : setErr(true);
                }
              }}
            >
              Sign Up
            </Fab>
          </FormControl>
          <section style={{ marginTop: "2rem" }}>
            <p>
              Already have an account?
              <Link
                to="/login"
                style={{
                  color: "#ffdc00",
                  textDecoration: "none",
                  marginLeft: "0.5rem"
                }}
              >
                Sign in
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
    ACTION_SET_CONFIRM_PASSWORD: password =>
      dispatch(ACTION_SET_CONFIRM_PASSWORD(password)),
    ACTION_SET_EMAIL: email => dispatch(ACTION_SET_EMAIL(email)),
    ACTION_SUBMIT_LOGIN: () => dispatch(ACTION_SUBMIT_LOGIN())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
