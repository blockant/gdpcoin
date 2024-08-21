import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import cx from "classnames";
import s from "./Header.css";

import { logout } from "../../actions/auth";

const Header = ({ user, logout, totalAmount }) => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setNavActive(!navActive);
  }

  document.onclick = (e) => {
    if (e.target.className !== 'toggle-nav' && 
        e.target.className !== 'toggle-icon' && 
        e.target.className !== 'toggle-line')
        setNavActive(false);
  }

  return (
    <div className="topbar-wrap">
      <div className="topbar is-sticky">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <ul className="topbar-nav d-lg-none">
              <li className="topbar-nav-item relative">
                <a className={`toggle-nav ${navActive ? 'active' : ''}`} onClick={toggleNav} href="#">
                  <div className="toggle-icon">
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                  </div>
                </a>
              </li>
            </ul>
            <a className="topbar-logo" href="./">
              <img
                src="/images/logo2x.png"
                srcSet="/images/logo2x.png 2x"
                alt="logo"
              />
            </a>
            <ul className="topbar-nav">
              <li className="topbar-nav-item relative">
                <span className="user-welcome d-none d-lg-inline-block">
                  Welcome! {user && user.name}
                </span>
                <NavDropdown
                  title={
                    <p className="toggle-tigger user-thumb" href="#">
                      <em className="ti ti-user"></em>
                    </p>
                  }
                  style={{ backgroundColor: "transparent" }}>
                  <div className=" dropdown-content dropdown-content-right dropdown-arrow-right user-dropdown">
                    <div className="user-status" style={{ minWidth: "180px" }}>
                      <h6 className="user-status-title">Balance</h6>
                      <div className="user-status-balance">
                        {totalAmount ? totalAmount : 0} <small>GDPC</small>
                      </div>
                    </div>
                    <ul className="user-links">
                      <Link to="/profile">
                        <li className="menuItemContainer">
                          <i className="ti ti-id-badge menuIcon"></i>My Profile
                        </li>
                      </Link>
                    </ul>
                    <ul className="user-links bg-light">
                      <li className="menuItemContainer" onClick={logout}>
                        <i className="ti ti-power-off menuIcon"></i>Logout
                      </li>
                    </ul>
                  </div>
                </NavDropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`navbar ${navActive ? 'active navbar-mobile' : ''}`}>
        <div className="container">
          <div className="navbar-innr">
            <ul className="navbar-menu">
              <li>
                <Link to="/">
                  <em className="ikon ikon-dashboard"></em> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/buy-token">
                  <em className="ikon ikon-coins"></em> Buy GDPcoin
                </Link>
              </li>
              <li>
                <Link to="/distribution">
                  <em className="ikon ikon-distribution"></em> Distribution
                </Link>
              </li>
              <li>
                <Link to="/transactions">
                  <em className="ikon ikon-transactions"></em> Transactions
                </Link>
              </li>
              <li>
                <Link to="/faq">
                  <em className="ikon ikon-exchange"></em> FAQ
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  {" "}
                  <em className="ikon ikon-user"></em> Profile{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  totalAmount: state.transaction.totalAmount,
});

export default connect(mapStateToProps, { logout })(Header);
