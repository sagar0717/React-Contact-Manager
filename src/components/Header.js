import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Header {props.branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: "MY APP"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
