import React, { Component } from "react";
import "./Home.css";
import personImage from "../../main_assets/first_page_image.svg";
import logoImage from "../../main_assets/name_logo.svg";
import SocialButton from "../general_components/social_buttons/SocialButton";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay_style: {
        height: "100%",
        width: "100%",
        background: "rgb(126,126,126,0.94)",
        top: "0",
        left: "0",
        transform: "translate(0,-100%)",
        transition: "transform 0.6s",
        position: "absolute",
        display: "block"
      },
      burgerStyle: {
        display: "block"
      }
    };
  }
  testHere = e => {
    e.preventDefault();
    this.setState({
      overlay_style: {
        height: "100vh",
        width: "100%",
        background: "rgb(126,126,126,0.96)",
        top: "0",
        left: "0",
        transform: "translate(0, 0)",
        transition: "transform 0.6s",
        position: "absolute",
        display: "block"
      },
      burgerStyle: {
        visibility: "hidden"
      }
    });
  };

  clickOnOverlay = e => {
    e.preventDefault();
    this.setState({
      overlay_style: {
        height: "100vh",
        width: "100%",
        background: "rgb(126,126,126,0.94)",
        top: "0",
        left: "0",
        transform: "translate(0,-100%)",
        transition: "transform 0.6s",
        position: "absolute",
        display: "block"
      },
      burgerStyle: {
        visibility: "visible",
        transition: "visibility 0.7s"
      }
    });
  };

  render() {
    return (
      <div className="home">
        <div className="home-flex1">
          <div
            className="home-overlay_bar"
            style={this.state.overlay_style}
            onClick={this.clickOnOverlay}
          >
            <div className="home-overlay_bar--container">
              <a href="#about">
                <h1>ABOUT ME</h1>
              </a>
              <a href="">
                <h1>RESUME</h1>
              </a>
              <a href="">
                <h1>PROJECTS</h1>
              </a>
            </div>
          </div>
          <img src={logoImage} width="200" alt="" />
        </div>
        <div className="home-flex2">
          <div className="home-flex2_intro">
            <h1>HELLO! I'M GAURAV</h1>
            <h3>A MOBILE AND WEB DEVELOPER</h3>
          </div>
          <img id="home-flex2_person" src={personImage} alt="" />
        </div>
        <div className="home-flex3">
          <div className="navbar-burger" style={this.state.burgerStyle}>
            <a href="" onClick={this.testHere}>
              <div className="nav-bars">
                <div id="nav-bars_1" />
                <div id="nav-bars_2" />
              </div>
            </a>
          </div>
          <div className="home-flex3_social">
            <SocialButton
              href="@mailto:jgaurav6@gmail.com"
              class="far fa-envelope"
            />
            <SocialButton
              href="https://www.linkedin.com/in/gauravjj/"
              class="fab fa-linkedin-in"
            />
            <SocialButton
              href="https://www.instagram.com/gauravjj/"
              class="fab fa-instagram"
            />
            <SocialButton
              href="https://github.com/jgaurav6"
              class="fab fa-github"
            />
          </div>
          <div className="home-flex3_spacer" />
        </div>
      </div>
    );
  }
}

export default Home;
