import React, { Component } from "react";
import "./App.css";
import Home from "./components/home_component/Home";
import About from "./components/about_component/About";
import Project from "./components/projects_component/Projects";
import Footer from "./components/footer_component/footer";
import ScrollableAnchor from "react-scrollable-anchor";
import { connect } from "react-redux";
import { addIp } from "./store/actions/ipActions";

class App extends Component {
  componentDidMount() {
    const time = new Date();
    fetch("https://api.ipify.org?format=json")
      .then(res => res.json())
      .then(
        result => {
          // this.props.addIp({ ip: result, time: time });
        },
        error => {
          console.log("error ip");
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

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
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addIp: ip => dispatch(addIp(ip))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
