import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    const name = "Larry";
    var Para = <p>This is new SAGAR</p>;

    return (
      <div className="App">
        <Header branding="Contact Manager" />
        {Para}
        <Contact name="John Doe" email="jdoe@gmail.com" />
        <Contact name="Jim Bim" email="jim@yahoo.com" />
      </div>
    );
  }
}

export default App;
