import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Linkbutton extends Component {
  static defaultProps = {
    buttonText: "Button",
  };

  render() {
    const { buttonText } = this.props;

    return (
      <>
        <NavLink className="hero-button" to="/portfolio/about_me">
          {buttonText}
        </NavLink>
      </>
    );
  }
}
