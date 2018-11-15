import React, { Component } from "react";
import "./Project.css";
import ProjectContainer from "./ProjectContainer/ProjectContainer";

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        {
          id: "shweb",
          source: require("../../main_assets/screens/screenshot1.png"),
          color: "rgb(255,10,85,0.85)",
          title: "Shuttler Website",
          fontColor: "#E2E2E2",
          technologies: ["React", "CSS", "HTML5", "Vue"]
        },
        {
          id: "chweb",
          source: require("../../main_assets/screens/screenshot2.png"),
          title: "Coding Hub Website",
          fontColor: "#75F4F4",
          color: "rgb(255,94,111,0.85)",
          technologies: ["React", "CSS", "HTML5", "Javascript", "Firebase"]
        },
        {
          id: "emweb",
          source: require("../../main_assets/screens/screenshot3.png"),
          title: "eGlu Main Website",
          fontColor: "#F4EBD9",
          color: "rgb(0,159,183,0.85)",
          technologies: ["JS", "CSS", "HTML5", "Express JS"]
        },
        {
          id: "eaweb",
          source: require("../../main_assets/screens/screenshot4.png"),
          title: "eGlu App Website",
          fontColor: "#F93943",
          color: "rgb(232,232,232,0.85)",
          technologies: ["Express JS", "CSS", "HTML5", "JS"]
        },
        {
          id: "anand",
          source: require("../../main_assets/screens/screenshot5.png"),
          title: "Ananda Timer",
          fontColor: "#F1FAEE",
          color: "rgb(203,69,27,0.85)",
          technologies: ["Flutter", "Adobe XD", "Cross platform"]
        },
        {
          id: "eland",
          source: require("../../main_assets/screens/screenshot6.png"),
          title: "eGlu Lock Layout",
          fontColor: "#F0F3BD",
          color: "rgb(38,49,109,0.85)",
          technologies: ["Android", "Proto.io", "Kotlin"]
        },
        {
          id: "diand",
          source: require("../../main_assets/screens/screenshot7.png"),
          title: "Deliver It",
          fontColor: "#EDF7F6",
          color: "rgb(0,139,139,0.85)",
          technologies: ["Android", "Java", "Proto.io"]
        }
      ],
      projectButtons: [
        { name: "SHOW ALL", id: "showall" },
        { name: "ANDROID", id: "android" },
        { name: "HTML5", id: "html5" },
        { name: "REACT", id: "react" },
        { name: "KOTLIN", id: "kotlin" },
        { name: "NODE JS", id: "nodejs" },
        { name: "JAVA", id: "java" },
        { name: "EXPRESS JS", id: "expressjs" },
        { name: "PHP", id: "php" },
        { name: "SQL", id: "sql" },
        { name: "NO SQL", id: "nosql" },
        { name: "Flutter", id: "flutter" }
      ],
      projectTechnologies: [
        {
          id: "showall",
          value: ["shweb", "chweb", "emweb", "eaweb", "anand", "eland", "diand"]
        },
        {
          id: "android",
          value: ["anand", "eland", "diand"]
        },
        {
          id: "html5",
          value: ["shweb", "chweb", "emweb", "eaweb"]
        },
        {
          id: "react",
          value: ["shweb", "chweb"]
        },
        {
          id: "kotlin",
          value: ["eland"]
        },
        {
          id: "nodejs",
          value: ["emweb", "eaweb"]
        },
        {
          id: "diand",
          value: ["diand"]
        }
      ],
      finalSend: [],
      clicked: "All projects. Use buttons to filter."
    };

    this.state.finalSend = this.state.images;
  }

  btnClickHandle = e => {
    e.preventDefault();
    let s = e.target.id;
    const temp = this.state.projectTechnologies.filter(item => item.id === s);
    let newArr = [];
    if (temp[0] !== undefined) {
      for (let i = 0; i < temp[0].value.length; i++) {
        const test = this.state.images.filter(
          image => temp[0].value[i] === image.id
        );
        newArr = [...newArr, ...test];
      }
      const title = this.state.projectButtons.filter(
        project => project.id === s
      );
      let newState = {
        images: [...this.state.images],
        projectButtons: [...this.state.projectButtons],
        projectTechnologies: [...this.state.projectTechnologies],
        finalSend: [...newArr],
        clicked: [
          s === "showall"
            ? "All projects. Use buttons to filter."
            : title[0].name + " PROJECTS"
        ]
      };
      this.setState(newState);
    }
  };

  render() {
    return (
      <div className="project">
        <div className="project-title">
          <h1>some of my projects</h1>
        </div>
        <div className="project-buttons">
          {this.state.projectButtons.map(technology => (
            <a key={technology.id} href="/" onClick={this.btnClickHandle}>
              <span id={technology.id} className="project-buttons_btn">
                {technology.name}
              </span>
            </a>
          ))}
        </div>
        <p className="project-help">{this.state.clicked}</p>
        <div className="projects-container_projects">
          <ProjectContainer selected={this.state.finalSend} />
        </div>
      </div>
    );
  }
}

export default Project;
