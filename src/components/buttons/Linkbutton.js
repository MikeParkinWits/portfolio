import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Linkbutton extends Component {
  static defaultProps = {
    buttonText: "Button",
    buttonPath: "/",
  };

  render() {
    const { buttonText, buttonPath } = this.props;

    return (
      <>
        <NavLink className="hero-button" to={buttonPath}>
          {buttonText}
        </NavLink>
      </>
    );
  }
}
