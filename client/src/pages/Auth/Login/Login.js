import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "toastr/build/toastr.min.css";

import { login, googleLogin } from "../../../actions/auth";
import { url } from "../../../config";
const Login = ({ login, isAuthenticated, googleLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("formData,", formData);
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="page-ath-wrap">
      <div className="page-ath-content">
        <div className="page-ath-header">
          <a href="./" className="page-ath-logo">
            <img
              src="/images/logo.png"
              srcSet="/images/logo2x.png 2x"
              alt="logo"
            />
          </a>
        </div>
        <div className="page-ath-form">
          <h2 className="page-ath-heading">
            Sign in <small>with your GDPcoin Account</small>
          </h2>
          <form className="form" onSubmit={onSubmit}>
            <div className="input-item">
              <input
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Your Email"
                className="input-bordered"
              />
            </div>
            <div className="input-item">
              <input
                type="password"
                placeholder="Password"
                className="input-bordered"
                name="password"
                value={password}
                onChange={onChange}
                minLength="6"
              />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="input-item text-left">
                {/* <input
                  className="input-checkbox input-checkbox-md"
                  id="remember-me"
                  type="checkbox"
                />
                <label>Remember Me</label> */}
              </div>
              <div>
                <Link to="/forgot">Forgot password?</Link>
                <div className="gaps-2x"></div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Sign In
            </button>
          </form>
          <div className="sap-text">
            <span>Or Sign In With</span>
          </div>

          <ul className="row guttar-20px guttar-vr-20px">
            <li className="col">
              <a
                className="btn btn-outline btn-dark btn-google btn-block"
                // onClick={googleLogin}
                href={url + "/auth/google"}>
                <em className="fab fa-google"></em>
                <span>Google</span>
              </a>
            </li>
          </ul>
          <div className="gaps-2x"></div>
          <div className="gaps-2x"></div>
          <div className="form-note">
            Don’t have an account?{" "}
            <Link to="/signup">
              <strong>Sign up here</strong>
            </Link>
          </div>
        </div>
        <div className="page-ath-footer">
          <ul className="footer-links">
            <li>
              <Link to="/regular">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/regular">Terms</Link>
            </li>
            <li>&copy; 2023 GDPcoin.</li>
          </ul>
        </div>
      </div>
      <div className="page-ath-gfx">
        <div className="w-100 d-flex justify-content-center">
          <div className="col-md-8 col-xl-5">
            <img src="/images/ath-gfx.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, googleLogin })(Login);
