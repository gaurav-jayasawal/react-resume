import React, { Component } from "react";
import "./RatingBar.css";

class ratingBar extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth > 1500) {
      this.setState({
        width: window.innerWidth / 300,
        height: window.innerHeight / 300
      });
    } else {
      this.setState({
        width: window.innerWidth / 305,
        height: window.innerHeight / 305
      });
    }
  }

  render() {
    return (
      <div className="ratingBar">
        <div className="ratingBar-skillName">{this.props.skill}</div>
        <div
          className="ratingBar-bar"
          style={{ width: this.props.rating * this.state.width + "px" }}
          // style={{ width: this.props.rating * (5.6) + "px" }}
        />
        <div className="ratingBar-bar_value">{this.props.rating + "%"}</div>
      </div>
    );
  }
}

export default ratingBar;
