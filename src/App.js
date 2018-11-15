import React, { Component } from "react";
import "./App.css";
import Home from "./components/home_component/Home";
import About from "./components/about_component/About";
import Project from "./components/projects_component/Projects";
import ScrollableAnchor from "react-scrollable-anchor";

class App extends Component {
  // componentDidMount() {
  //   fetch("https://api.ipify.org?format=json")
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         console.log("error ip NOTTT", result.ip);

  //         fetch("http://deliverit.dx.am/497/setIp.php", {
  //           method: "POST",
  //           headers: new Headers({
  //             "Content-Type": "application/x-www-form-urlencoded" // <-- Specifying the Content-Type
  //           }),
  //           body: "ip=" + result.ip // <-- Post parameters
  //         })
  //           .then(response => response.text())
  //           .then(responseText => {
  //             alert(responseText);
  //           })
  //           .catch(error => {
  //             console.error(error);
  //           });

  //         this.setState({
  //           isLoaded: true,
  //           items: result.items
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
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
