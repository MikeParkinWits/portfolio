import React, { Component } from "react";
import "../styles/aboutPage.css";

import Memoji from "../assets/Me-About.JPG";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import Linkbutton from "../components/buttons/Linkbutton";
import Skills from "../components/Skills";

import TestImage from "../assets/Skill Symbols/ReactSymbol.png";

//Importing Helper
import { SkillList } from "../helpers/SkillList.js";
import EducationBlock from "../components/EducationBlock";

export default class AboutMePage extends Component {
  render() {
    return (
      <>
        <article className="about-page">
          <header>
            <h1 className="page-title">About Me</h1>
          </header>
          <section className="about-desc">
            <section className="about-left-column">
              <img src={Memoji} />
              <p className="about-location">
                <LocationOnIcon />
                Johannesburg, South Africa
              </p>
            </section>
            <section className="about-right-column">
              <p className="body-text">
                Hi, I'm Michael Parkin, a recent graduate with a degree in
                Digital Arts - majoring in game, and interactive media, design.
                Through my degree, I found my passion for designing good user
                experiences and have gained experience in numerous areas such as
                UI/UX design, front-end development, and game design.
              </p>
              <p className="body-text">
                I am currently seeking to further this passion by pursuing a
                masters degree in Human-Comptuer Interaction. I am excited to
                see what the future holds, and am eager to work with a team of
                like-minded individuals to create innovative and engaging
                digital experiences.
              </p>
              <p className="body-text">
                Out of the classroom you’ll find me playing board games, taking
                photos, and petting all the good dogs.
              </p>
            </section>
          </section>

          <section className="about-education">
            <header>
              <h2 className="page-sub-title">Education</h2>
              <EducationBlock />
            </header>
          </section>

          <section className="about-skills">
            <header>
              <h2 className="page-sub-title">Expertise</h2>

              <section className="skill-list-grid">
                {SkillList.slice(0, SkillList.length).map(
                  (skillItem, value) => {
                    return (
                      <Skills
                        key={SkillList.length - value}
                        skillImage={skillItem.skillImage}
                        skillName={skillItem.skillName}
                      />
                    );
                  }
                )}
              </section>
            </header>
          </section>
        </article>
      </>
    );
  }
}
