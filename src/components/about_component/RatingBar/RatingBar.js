import React from "react";
import "./RatingBar.css";

const ratingBar = props => (
  <div className="ratingBar">
    <div className="ratingBar-skillName">{props.skill}</div>
    <div
      className="ratingBar-bar"
      style={{ width: props.rating * 5.6 + "px" }}
    />
    <div className="ratingBar-bar_value">{props.rating + "%"}</div>
  </div>
);

export default ratingBar;
