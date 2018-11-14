import React, { Component } from "react";
import "./App.css";
import Home from "./components/home_component/Home";
import About from "./components/about_component/About";
import Project from "./components/projects_component/Projects";
import ScrollableAnchor from "react-scrollable-anchor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollableAnchor id={"home"}>
          <Home />
        </ScrollableAnchor>
        <ScrollableAnchor id={"about"}>
          <About />
        </ScrollableAnchor>

        <ScrollableAnchor id={"projects"}>
          <Project />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
