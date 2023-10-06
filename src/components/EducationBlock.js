import React, { Component } from "react";

import WitsLogo from "../assets/WitsLogo.png";

export default class EducationBlock extends Component {
  static defaultProps = {
    educationName: "University Name",
    educationImage: WitsLogo,
    educationQualification: "Education Qualification",
    educationYear: "2019 - 2022",
  };

  render() {
    const {
      educationImage,
      educationName,
      educationQualification,
      educationYear,
    } = this.props;
    return (
      <section className="education-block">
        <img src={educationImage} width="1000" height="1000" />
        <section className="education-block-info">
          <header>
            <h3 className="education-block-title">{educationName}</h3>
          </header>
          <p>{educationQualification}</p>
          <time>{educationYear}</time>
        </section>
      </section>
    );
  }
}
