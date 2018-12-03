import React from "react";
import "./ProjectCard.css";

const projectCard = props => (
  <div className="projectCard">
    <div className="projectCard_row-1">
      <div className="projectCard_row-1_col1">
        <div className="row-1_col1--logo">
          <img src={props.details.logo} width="60px" alt="" />
        </div>
        <div className="row-1_col1--company-name">
          {props.details.company_name}
        </div>
      </div>
      <div className="projectCard_row-1_col2">{props.details.title}</div>
    </div>
    <div className="row-1_bottom-divider">
      <hr />
    </div>
    <div className="projectCard_row-2">
      <ul className="projectCard_row-2_ul">
        {props.details.duties.map(duty => (
          <li key={duty}>{duty}</li>
        ))}
      </ul>
    </div>
    <div className="projectCard_row-3">
      {props.details.date} | {props.details.location}
    </div>
  </div>
);

export default projectCard;
