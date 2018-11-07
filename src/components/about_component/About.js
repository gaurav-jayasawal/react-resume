import React, { Component } from "react";
import "./About.css";
import MyImage from "../../main_assets/MyImage.svg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-title">
          <h1>a little about me</h1>
        </div>
        <div className="about-contents">
          <div className="about-contents_col1">
            <div className="about-contents_col1--image">
              <img src={MyImage} width="500px" alt="" />
            </div>
            <div className="about-contents_col1--description">
              <h3>
                Hi, I am the vice president of Coding Hub, Plattsburgh. I have a
                passion for mobile and web development. I also love to working
                with databases, making me enjoy data science and database
                administration.
              </h3>
            </div>
            <div className="about-contents-col1--button">B</div>
          </div>
          <div className="about-contents_col2">A</div>
        </div>
      </div>
    );
  }
}

export default About;
