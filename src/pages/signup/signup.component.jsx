import React from "react";

import "./signup.style.css";
import { FormControl, TextField, Fab } from "@material-ui/core";
import { mdiGooglePlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="signup-base-container">
      <h1 className="app-title">Kit - Keep In Touch</h1>
      <section className="signup-main-container">
        <div className="page-label">
          <p>Sign Up</p>
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
            />
            <TextField
              id="standard-full-width"
              label="Confirm Password"
              style={{ marginTop: "2rem" }}
              placeholder="Enter password"
              // helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />
            <Fab
              variant="signup"
              aria-label="like"
              style={{
                marginTop: "2rem",
                backgroundColor: "#ffdc00",
                color: "white",
                fontWeight: "bold"
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

export default SignupPage;
