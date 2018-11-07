import React, { Component } from "react";
import "./Home.css";
import personImage from "../../main_assets/first_page_image.svg";
import logoImage from "../../main_assets/name_logo.svg";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img id="logo-image" src={logoImage} width="250" alt="" />
        <img src={personImage} width="800" alt="" />
        <div className="nav-bars">
          <a href="/">
            <div className="nav-bars_1" />
            <div className="nav-bars_2" />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
