import React, { Component } from "react";

import Memoji from "../assets/Skill Symbols/ReactSymbol.png";

export default class Skills extends Component {
  static defaultProps = {
    skillImage: Memoji,
    skillName: "React.JS",
  };

  render() {
    const { skillImage, skillName } = this.props;
    return (
      <section className="about-skill-block">
        <img src={skillImage} />
        <p>{skillName}</p>
      </section>
    );
  }
}
