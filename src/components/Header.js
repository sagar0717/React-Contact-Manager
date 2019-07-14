import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <div>
      <h1 style={{ color: "red" }}> {props.branding}</h1>
    </div>
  );
};

const headerStyle = {
  color: "grey",
  fontSize: "50px"
};
Header.defaultProps = {
  branding: "MY APP"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
