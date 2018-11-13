import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  projectButtons = [
    { name: "SHOW ALL" },
    { name: "FRONT END" },
    { name: "BACK END" },
    { name: "ANDROID" },
    { name: "HTML5" },
    { name: "REACT" },
    { name: "KOTLIN" },
    { name: "CSS" },
    { name: "NODE JS" },
    { name: "JAVA" },
    { name: "EXPRESS JS" },
    { name: "PHP" },
    { name: "SQL" },
    { name: "NO SQL" }
  ];
  render() {
    return (
      <div className="project">
        <div className="project-title">
          <h1>some of my projects</h1>
        </div>
        <div className="project-buttons">
          {this.projectButtons.map(technology => (
            <a href="">
              <span key={technology.name} className="project-buttons_btn">
                {technology.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Project;
