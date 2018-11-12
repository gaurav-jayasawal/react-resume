import React, { Component } from "react";
import "./About.css";
import MyImage from "../../main_assets/MyImage.svg";
import RatingBar from "./RatingBar/RatingBar";
import Button1 from "../general_components/Button_Type_1/Button1";

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
    { skill: "leadership", rating: "95" },
    { skill: "agile", rating: "85" },
    { skill: "prototype", rating: "85" }
  ];

  render() {
    return (
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
                Hi, I am the vice president of Coding Hub, Plattsburgh. I have a
                passion for mobile and web development. I also love to working
                with databases, making me enjoy data science and database
                administration.
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
    );
  }
}

export default About;
