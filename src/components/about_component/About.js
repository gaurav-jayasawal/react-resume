import React, { Component } from "react";
import "./About.css";
import MyImage from "../../main_assets/newImage.svg";
import RatingBar from "./RatingBar/RatingBar";
import Button1 from "../general_components/Button_Type_1/Button1";
// import ScrollableAnchor from "react-scrollable-anchor";

class About extends Component {
  skills = [
    { skill: "react", rating: "90" },
    { skill: "android", rating: "95" },
    { skill: "js", rating: "85" },
    { skill: "node", rating: "80" },
    { skill: "sql", rating: "90" },
    { skill: "php", rating: "80" },
    { skill: "firebase", rating: "85" },
    { skill: "nosql", rating: "85" },
    { skill: "css", rating: "85" },
    { skill: "agile", rating: "90" },
    { skill: "prototype", rating: "85" }
  ];

  render() {
    return (
      // <ScrollableAnchor id="about">
      <div className="about">
        <div className="about-title">
          <h1>a little about me</h1>
        </div>
        <div className="about-contents">
          <div className="about-contents_col1">
            <div className="about-contents_col1--image">
              <img src={MyImage} width="450px" alt="" />
            </div>
            <div className="about-contents_col1--description">
              <h3>
                Hi, I am the vice president of{" "}
                <a href="https://coding-hub.com" target="_blank">
                  Coding Hub,
                </a>{" "}
                Plattsburgh. I am a fullstack web and android developer looking
                to get hired in May 2019. Send me an email at{" "}
                <a href="mailto:jgaurav6@gmail.com">jgaurav6@gmail.com</a> to
                talk.
              </h3>
            </div>
            <div className="about-contents-col1--button">
              <Button1 />
            </div>
          </div>
          <div className="about-contents_col2">
            <div className="about-contents_col2--ratingBars">
              {this.skills.map(skillset => (
                <RatingBar
                  key={skillset.skill}
                  skill={skillset.skill}
                  rating={skillset.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      // </ScrollableAnchor>
    );
  }
}

export default About;
