import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, Navigate } from "react-router-dom";
import { host } from "../../config";
import { verificationEmail } from "../../actions/auth";
const Verification = ({ verificationEmail, user }) => {
  const { emailToken, email } = useParams();

  useEffect(() => {
    console.log(emailToken);
    verificationEmail(emailToken, email);
  }, [emailToken, email]);
  if (user && user.verified) window.location.href = host;
};

Verification.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { verificationEmail })(Verification);
