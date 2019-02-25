import React, { Component } from "react";
import "./App.css";
import Home from "./components/home_component/Home";
// import About from "./components/about_component/About";
import NewAbout from "./components/new_about_component/NewAbout";
import Project from "./components/projects_component/Projects";
import Experience from "./components/experience_component/Experience";
import Footer from "./components/footer_component/footer";
import ScrollableAnchor from "react-scrollable-anchor";
import { connect } from "react-redux";
import { addIp } from "./store/actions/ipActions";

//Commit for the day
class App extends Component {
  // componentDidMount() {
  //   const time = new Date();
  //   fetch("https://api.ipify.org?format=json")
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         this.props.addIp({ ip: result, time: time });
  //       },
  //       error => {
  //         console.log("error ip");
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     );
  // }

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

const mapDispatchToProps = dispatch => {
  return {
    addIp: ip => dispatch(addIp(ip))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
