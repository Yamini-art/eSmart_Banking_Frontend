import React from "react";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router";
import { logoutAdmin, getAdminProfile } from "../../actions/admin/adminActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AdminBase extends React.Component {
  componentDidMount() {
    this.props.getAdminProfile();
  }

  onLogoutHandler = () => {
    this.props.logoutAdmin();
  };
  render() {
    const { path } = this.props.match;
    return (
      <div>
        {/*Dashboard Header start*/}

        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-light fixed-top shadow mb-5 bg-body rounded">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Appearance
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/*Dashboard header End*/}

        {/*Dashboard Sidebar Start*/}
        <aside className="sidebar shadow mb-5 bg-body rounded">
          <ul className="sidebar_icon">
            <li className="em">
              <Link to="/admindashboard/activateid">Activate Id</Link>
            </li>
            <li className="em">Offers</li>
            <li className="em">
              <Link to="/admindashboard/loandetails">Loan Details</Link>
            </li>
            <li className="em">Applied</li>
            <li className="em">History</li>
            <li className="em">Delete</li>
            <button className="em" onClick={this.onLogoutHandler}>
              Logout
            </button>
          </ul>
        </aside>
        {/*Dashboard Sidebar End*/}
        {this.props.children}
      </div>
    );
  }
}

AdminBase.propTypes = {
  admin: PropTypes.object.isRequired,
  logoutAdmin: PropTypes.func.isRequired,
  getAdminProfile: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default withRouter(
  connect(mapStateToProps, { logoutAdmin, getAdminProfile })(AdminBase)
);
