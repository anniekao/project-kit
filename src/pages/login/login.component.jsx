import React from "react";

import "./login.style.css";
import { FormControl, TextField, Fab } from "@material-ui/core";
import { mdiGooglePlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
            <Fab
              variant="signin"
              aria-label="like"
              style={{
                marginTop: "2rem",
                backgroundColor: "#ffdc00",
                color: "white",
                fontWeight: "bold"
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

export default LoginPage;
