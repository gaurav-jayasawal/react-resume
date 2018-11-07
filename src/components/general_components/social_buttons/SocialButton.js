import React from "react";
import "./SocialButton.css";

const socialButton = props => (
  <a href="">
    <div className="socialButtonContainer">
      <i id="icon" className={props.class} />
    </div>
  </a>
);

export default socialButton;
