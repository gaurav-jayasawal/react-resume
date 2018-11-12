import React, { Component } from "react";
import "./Home.css";
import personImage from "../../main_assets/first_page_image.svg";
import logoImage from "../../main_assets/name_logo.svg";
import SocialButton from "../general_components/social_buttons/SocialButton";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-flex1">
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
          <div>
            <a href="">
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
