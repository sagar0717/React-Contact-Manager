import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon="home" style={{ cursor: "pointer" }} />{" "}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <FontAwesomeIcon icon="plus" style={{ cursor: "pointer" }} />{" "}
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <FontAwesomeIcon
                  icon="question"
                  style={{ cursor: "pointer" }}
                />{" "}
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// const headerStyle = {
//   color: "grey",
//   fontSize: "50px"
// };
Header.defaultProps = {
  branding: "MY APP"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
