import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Navigate } from "react-router-dom";

import { register } from "../../../actions/auth";
import "toastr/build/toastr.min.css";
import toastr from "toastr";


const Signup = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    if (!isChecked) {
      console.log("checked", isChecked);

      toastr.warning("You have to check GDPcoin's Privacy Policy & Terms.");
    } else {
      e.preventDefault();
      console.log("formData", formData);
      if (password !== password2) {
        toastr.warning("Passwords do not match.");
      } else {
        register({ name, email, password });
      }
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="page-ath-wrap">
      <div className="page-ath-content">
        <div className="page-ath-header">
          <a href="./" className="page-ath-logo">
            <img
              src="/images/logo.png"
              srcset="/images/logo2x.png 2x"
              alt="logo"
            />
          </a>
        </div>
        <div className="page-ath-form">
          <h2 className="page-ath-heading">
            Sign up <small>Create New GDPcoin Account</small>
          </h2>
          <div className="input-item">
            <input
              type="text"
              placeholder="Your Name"
              className="input-bordered"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="input-item">
            <input
              type="email"
              placeholder="Your Email"
              className="input-bordered"
              name="email"
              value={email}
              onChange={onChange}
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
            />
          </div>
          <div className="input-item">
            <input
              type="password"
              placeholder="Repeat Password"
              className="input-bordered"
              name="password2"
              value={password2}
              onChange={onChange}
            />
          </div>
          <div className="input-item text-left">
            <input
              className="input-checkbox input-checkbox-md"
              id="term-condition"
              type="checkbox"
              value={isChecked}
              onClick={() => {
                setIsChecked(!isChecked);
              }}
            />
            <label for="term-condition">
              I agree to GDPcoin’s{" "}
              <Link to="/regular">Privacy Policy</Link> &amp;{" "}
              <Link to="/regular">Terms.</Link>
            </label>
          </div>
          <button className="btn btn-primary btn-block" onClick={onSubmit}>
            Create Account
          </button>
          <div className="sap-text">
            <span>Or Sign Up With</span>
          </div>

          <ul className="row guttar-20px guttar-vr-20px">
            <li className="col">
              <a
                href="#"
                className="btn btn-outline btn-dark btn-google btn-block">
                <em className="fab fa-google"></em>
                <span>Google</span>
              </a>
            </li>
          </ul>
          <div className="gaps-2x"></div>
          <div className="gaps-2x"></div>
          <div className="form-note">
            Already have an account ?{" "}
            <a href="sign-in.html">
              {" "}
              <Link to="/login">
                {" "}
                <strong>Sign in instead</strong>
              </Link>
            </a>
          </div>
        </div>
        <div className="page-ath-footer">
          <ul className="footer-links">
            <li>
              <Link to="/regular">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/regular">
                Terms
              </Link>              
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

Signup.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Signup);
