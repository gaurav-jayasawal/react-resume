import React, { Component } from "react";
import "./ProjectContainer.css";

class ProjectContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        {
          id: "1",
          source: require("../../../main_assets/screens/screenshot1.png"),
          color: "rgb(255,10,85,0.85)",
          title: "Shuttler Website",
          fontColor: "#E2E2E2",
          technologies: ["React", "CSS", "HTML5", "Vue"]
        },
        {
          id: "2",
          source: require("../../../main_assets/screens/screenshot2.png"),
          title: "Coding Hub Website",
          fontColor: "#75F4F4",
          color: "rgb(255,94,111,0.85)",
          technologies: ["React", "CSS", "HTML5", "Javascript", "Firebase"]
        },
        {
          id: "3",
          source: require("../../../main_assets/screens/screenshot3.png"),
          title: "eGlu Main Website",
          fontColor: "#F4EBD9",
          color: "rgb(0,159,183,0.85)",
          technologies: ["React", "CSS", "HTML5"]
        },
        {
          id: "4",
          source: require("../../../main_assets/screens/screenshot4.png"),
          title: "eGlu App Website",
          fontColor: "#F93943",
          color: "rgb(232,232,232,0.85)",
          technologies: ["React", "CSS", "HTML5"]
        },
        {
          id: "5",
          source: require("../../../main_assets/screens/screenshot5.png"),
          title: "Ananda Timer",
          fontColor: "#F1FAEE",
          color: "rgb(203,69,27,0.85)",
          technologies: ["React", "CSS", "HTML5"]
        },
        {
          id: "6",
          source: require("../../../main_assets/screens/screenshot6.png"),
          title: "eGlu Lock Layout",
          fontColor: "#F0F3BD",
          color: "rgb(38,49,109,0.85)",
          technologies: ["React", "CSS", "HTML5"]
        }
      ]
    };
  }
  render() {
    return (
      <div className="ProjectContainer">
        <div className="ProjectContainer_Project">
          {this.state.images.map(image => (
            <div key={image.id} className="ProjectContainer_Project_Image">
              <div
                className="projectContainer-overlay"
                style={{ background: image.color, color: image.fontColor }}
              >
                <h3>{image.title}</h3>
                <div className="projectContainer-overlay_technologies">
                  {image.technologies.map(tech => (
                    <span className="projectContainer-overlay_technologies--box">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a href="">
                <img src={image.source} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectContainer;
