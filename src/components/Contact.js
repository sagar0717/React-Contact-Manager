import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";

class Contact extends Component {
  state = {
    showContactInfo: true
  };
  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name} <FontAwesomeIcon onClick={this.onShowClick} icon="sort-down" />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired
};

export default Contact;
