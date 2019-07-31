import React from "react";

const About = props => {
  return (
    <div>
      {/* <h1>{props.match.params.id}</h1> for accessing the parameter passed in the router */}
      <h1 className="display-4">About Contact Manager</h1>
      <p className="lead">Simple app to manage Contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};

export default About;
