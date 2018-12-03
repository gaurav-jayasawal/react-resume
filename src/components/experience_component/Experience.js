import React, { Component } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./experience.css";

class Experience extends Component {
  
  constructor(props) {
    this.state = {
      experiences: [
          {
            logo: "",
            company_name: "",
            title: "",
            
          }
      ]
    }
  }

  render() {
    return (
      <div className="experience">
        <div className="experience-title">
          <h1>my experiences</h1>
        </div>
        <div className="project-card-list">
          <ProjectCard />
        </div>
      </div>
    );
  }
}

export default Experience;
