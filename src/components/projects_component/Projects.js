import React, { Component } from "react";
import "./Project.css";
import ProjectContainer from "./ProjectContainer/ProjectContainer";

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
            <a key={technology.name} href="/">
              <span className="project-buttons_btn">{technology.name}</span>
            </a>
          ))}
        </div>
        <p className="project-help">
          Showing all projects. Click on buttons to filter.
        </p>
        <div className="projects-container_projects">
          <ProjectContainer />
        </div>
      </div>
    );
  }
}

export default Project;
