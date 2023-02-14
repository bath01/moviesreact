import React, { Component } from "react";
// import logo from "./logo.svg";
import user from "./user.json";
import Header from "./components/Header";
// import Form from "./components/Form.js";


import "./App.css";
import Characters from "./components/Characters";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header {...user} />
        {/* <Form /> */}
        <Characters />
      </div>
    );
  }
}

export default App;
