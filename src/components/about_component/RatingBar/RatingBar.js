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
    let num = 0;
    switch (true) {
      case window.innerWidth > 1500:
        num = 300;
        break;
      case window.innerWidth <= 1500 && window.innerWidth > 1300:
        num = 305;
        break;
      case window.innerWidth <= 1300 && window.innerWidth > 1240:
        num = 320;
        break;
      case window.innerWidth <= 1240 && window.innerWidth > 1200:
        num = 345;
        break;
      case window.innerWidth <= 1200 && window.innerWidth > 1150:
        num = 400;
        break;
      case window.innerWidth <= 1150 && window.innerWidth > 1000:
        num = 160;
        break;
      case window.innerWidth <= 1000 && window.innerWidth > 800:
        num = 180;
        break;
      case window.innerWidth <= 800 && window.innerWidth > 700:
        num = 200;
        break;
      case window.innerWidth <= 700 && window.innerWidth > 650:
        num = 220;
        break;
      case window.innerWidth <= 650 && window.innerWidth > 600:
        num = 240;
        break;
      case window.innerWidth <= 600 && window.innerWidth > 500:
        num = 260;
        break;
      case window.innerWidth <= 500:
        num = 0;
        break;
      default:
        num = 0;
        break;
    }

    this.setState({
      width: window.innerWidth / num,
      height: window.innerHeight / num
    });
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
