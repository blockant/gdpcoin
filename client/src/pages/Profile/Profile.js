import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Navigate } from "react-router-dom";
import "toastr/build/toastr.min.css";
import toastr from "toastr";

import "./Profile.css";

import { updateProfile, updatePassword } from "../../actions/user";
const Profile = ({ user, isAuthenticated, updateProfile, updatePassword }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    birthday: "",
  });

  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newPassword1, setNewPassword1] = useState();

  useEffect(() => {
    if (user) {
      let date = "";
      if (user.birthday) {
        date = formatDate(user.birthday);
      }
      setFormData({
        ...formData,
        name: user.name ? user.name : "",
        email: user.email ? user.email : "",
        phoneNumber: user.phoneNumber ? user.phoneNumber : "",
        birthday: date,
      });
    }
  }, [user]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };
  const { name, email, password, phoneNumber, birthday } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onUpdateProfileButton = () => {
    updateProfile(formData, user._id);
  };
  const onUpdatePasswordButton = () => {
    if (newPassword == newPassword1) {
      updatePassword(oldPassword, newPassword, user._id);
    } else {
      toastr.warning("Passwords do not match.");
    }
  };
  return (
    <div className="page-content">
      <div className="container">
        <div className="row profileContainer">
          <div className="main-content contentContainer">
            <div className="content-area card">
              <div className="card-innr">
                <div className="card-head">
                  <h4 className="card-title">Profile Details</h4>
                </div>
                <ul className="nav nav-tabs nav-tabs-line" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#personal-data">
                      Personal Data
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#password">
                      Password
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="profile-details">
                  <div className="tab-pane fade show active" id="personal-data">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-item input-with-label">
                          <label htmlFor="name" className="input-item-label">
                            Full Name
                          </label>
                          <input
                            className="input-bordered"
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-with-label">
                          <label
                            htmlFor="email-address"
                            className="input-item-label">
                            Email Address
                          </label>
                          <input
                            className="input-bordered"
                            type="text"
                            id="email-address"
                            name="email-address"
                            value={email}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-with-label">
                          <label
                            htmlFor="phoneNumber"
                            className="input-item-label">
                            Mobile Number
                          </label>
                          <input
                            className="input-bordered"
                            type="number"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber && phoneNumber}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-with-label">
                          <label
                            htmlFor="birthday"
                            className="input-item-label">
                            Date of Birth
                          </label>
                          <input
                            className="input-bordered date-picker-dob"
                            type="date"
                            id="birthday"
                            name="birthday"
                            defaultValue={birthday}
                            value={birthday}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="gaps-1x"></div>
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <button
                        className="btn btn-primary"
                        onClick={onUpdateProfileButton}>
                        Update Profile
                      </button>
                      <div className="gaps-2x d-sm-none"></div>
                      {/* <span className="text-success">
                        <em className="ti ti-check-box"></em> All Changes are
                        saved
                      </span> */}
                    </div>
                  </div>

                  <div className="tab-pane fade" id="password">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-item input-with-label">
                          <label
                            htmlFor="old-pass"
                            className="input-item-label">
                            Old Password
                          </label>
                          <input
                            className="input-bordered"
                            type="password"
                            id="oldPassword"
                            name="oldPassword"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-item input-with-label">
                          <label
                            htmlFor="new-pass"
                            className="input-item-label">
                            New Password
                          </label>
                          <input
                            className="input-bordered"
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-with-label">
                          <label
                            htmlFor="confirm-pass"
                            className="input-item-label">
                            Confirm New Password
                          </label>
                          <input
                            className="input-bordered"
                            type="password"
                            id="newPassword1"
                            name="newPassword1"
                            onChange={(e) => setNewPassword1(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="note note-plane note-info pdb-1x">
                      <em className="fas fa-info-circle"></em>
                      <p>
                        Password should be minmum 8 letter and include lower and
                        uppercase letter.
                      </p>
                    </div>
                    <div className="gaps-1x"></div>
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <button
                        className="btn btn-primary"
                        onClick={onUpdatePasswordButton}>
                        Update
                      </button>
                      <div className="gaps-2x d-sm-none"></div>
                      {/* <span className="text-success">
                        <em className="ti ti-check-box"></em> Changed Password
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { updateProfile, updatePassword })(
  Profile
);
