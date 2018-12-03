import React from "react";
import "./ProjectCard.css";
import testImg from "../../../main_assets/experience_logos/coding_hub.png";

const projectCard = props => (
  <div className="projectCard">
    <div className="projectCard_row-1">
      <div className="projectCard_row-1_col1">
        <div className="row-1_col1--logo">
          <img src={testImg} width="60px" alt="Picture" />
        </div>
        <div className="row-1_col1--company-name">CODING HUB</div>
      </div>
      <div className="projectCard_row-1_col2">
        Co-founder and Vice President
      </div>
    </div>
    <div className="row-1_bottom-divider">
      <hr />
    </div>
    <div className="projectCard_row-2">
      <ul className="projectCard_row-2_ul">
        <li>
          Supervise an agile team of 8 developers to deliver high quality
          applications to make hundreds of student's lives easier on campus
        </li>
        <li>
          Spearheaded club projects by conducting weekly scrum meetings to
          discuss the tasks to be completed by the next sprint and assign them
          on Asana
        </li>
        <li>
          Administer the GitHub repositories as the lead developer and scrum
          master
        </li>
      </ul>
    </div>
    <div className="projectCard_row-3">
      Sep 2018 - Present | Plattsburgh, New York
    </div>
  </div>
);

export default projectCard;
