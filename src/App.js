import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faPlus, faSortDown } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider } from "./context";

library.add(fas, faPlus, faSortDown);

class App extends Component {
  render() {
    const name = "Larry";
    var Para = <p>This is new SAGAR</p>;

    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
