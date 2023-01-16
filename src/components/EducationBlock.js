import React, { Component } from "react";

import WitsLogo from "../assets/WitsLogo.png";

export default class EducationBlock extends Component {
  render() {
    return (
      <section className="education-block">
        <img src={WitsLogo} />
        <section className="education-block-info">
          <header>
            <h3 className="education-block-title">
              The University of the Witwatersrand
            </h3>
          </header>
          <p>
            Bachelor of Arts in Digital Arts (Game, and Interactive Media,
            Design)
          </p>
          <time>2019 - 2022</time>
        </section>
      </section>
    );
  }
}
