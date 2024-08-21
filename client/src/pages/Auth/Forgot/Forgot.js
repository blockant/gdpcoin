import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "toastr/build/toastr.min.css";

const Forgot = () => {
  return (
    <div class="page-ath-wrap">
      <div class="page-ath-content">
        <div class="page-ath-header">
          <a href="./" class="page-ath-logo">
            <img
              src="images/logo.png"
              srcset="images/logo2x.png 2x"
              alt="logo"
            />
          </a>
        </div>
        <div class="page-ath-form">
          <h2 class="page-ath-heading">
            Reset password{" "}
            <span>
              If you forgot your password, well, then we’ll email you
              instructions to reset your password.
            </span>
          </h2>
          <form action="#">
            <div class="input-item">
              <input
                type="text"
                placeholder="Your Email"
                class="input-bordered"
              />
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <button class="btn btn-primary btn-block">
                  Send Reset Link
                </button>
              </div>
              <div>
                <Link to="/login">Return to login</Link>
              </div>
            </div>
            <div class="gaps-2x"></div>
          </form>
        </div>
        <div class="page-ath-footer">
          <ul class="footer-links">
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
      <div class="page-ath-gfx">
        <div class="w-100 d-flex justify-content-center">
          <div class="col-md-8 col-xl-5">
            <img src="images/ath-gfx.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

Forgot.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Forgot);
