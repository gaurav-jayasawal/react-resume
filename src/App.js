import React, { Component } from "react";
import "./App.css";
import Home from "./components/home_component/Home";
import About from "./components/about_component/About";
import Project from "./components/projects_component/Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Project />
      </div>
    );
  }
}

export default App;
