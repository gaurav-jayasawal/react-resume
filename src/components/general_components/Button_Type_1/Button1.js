import React from "react";
import "./Button1.css";

const button1 = props => (
  <div className="button1">
    <a
      href={require("../../../main_assets/softdev.pdf")}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="button1-innerdiv">
        <div>RESUME</div>
        <div className="button1-arrow">
          <i className="fas fa-arrow-right" />
        </div>
      </div>
    </a>
  </div>
);

export default button1;
