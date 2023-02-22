import React, { Component } from "react";
import "./App.css";
import Home from "./components/home_component/Home";
import NewAbout from "./components/new_about_component/NewAbout";
import Project from "./components/projects_component/Projects";
import Experience from "./components/experience_component/Experience";
import Footer from "./components/footer_component/footer";
import ScrollableAnchor from "react-scrollable-anchor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollableAnchor id={"home"}>
          <Home />
        </ScrollableAnchor>
        <ScrollableAnchor id={"about"}>
          <NewAbout />
        </ScrollableAnchor>
        <ScrollableAnchor id={"projects"}>
          <Project />
        </ScrollableAnchor>
        <ScrollableAnchor id={"experience"}>
          <Experience />
        </ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}

export default App;
