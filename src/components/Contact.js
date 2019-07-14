import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";

class Contact extends Component {
  state = {};

  onShowClick = (name, e) => {
    // console.log("OnShowClick Function");
    console.log(name);
  };
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <FontAwesomeIcon
            onClick={() => this.onShowClick(name)}
            icon="sort-down"
          />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired
};

export default Contact;
