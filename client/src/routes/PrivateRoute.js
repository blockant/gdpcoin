import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isAuthenticated, user }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  } else if (user && user.name && !user.verified) {
    return <Navigate to="/email-verification" />;
  }
  return children;
};

PrivateRoute.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(PrivateRoute);
