import React, { Component } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./experience.css";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          logo: require("../../main_assets/experience_logos/coding_hub.png"),
          company_name: "Coding Hub",
          title: "Co-founder and Vice President",
          duties: [
            "Supervise an agile team of 8 developers to deliver high quality applications to make hundreds of student's lives easier on campus",
            "Spearheaded club projects by conducting weekly scrum meetings to discuss the tasks to be completed by the next sprint and assign them on Asana",
            "Administer the GitHub repositories as the lead developer and scrum master"
          ],
          date: "Sep 2018 - Present",
          location: "New York, USA"
        },
        {
          logo: require("../../main_assets/experience_logos/eglu.jpg"),
          company_name: "WiZN Systems",
          title: "Full-stack Developer Intern",
          duties: [
            "Integrated APIs into an Android app to detect required network details of clients, saving the company hours of site survey time",
            "Planned and built 2 fully responsive websites during the internship using CSS, JS to showcase the company's products and services",
            "Developed a logger website by making REST APIs with node and express js to fetch and display server logs for rapid debugging",
            "Stored client site analysis data on firebase databases for research to potentially optimize future deployment time by hours"
          ],
          date: "May 2018 - Aug 2018",
          location: "Bangalore, IN"
        }
      ]
    };
  }

  render() {
    return (
      <div className="experience">
        <div className="experience-title">
          <h1>my experiences</h1>
        </div>
        <div className="project-card-list">
          {this.state.experiences.map(experience => (
            <ProjectCard details={experience} />
          ))}
        </div>
      </div>
    );
  }
}

export default Experience;
