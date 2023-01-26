import React, { Component } from "react";
import "../styles/aboutPage.css";

import Memoji from "../assets/Me-About.JPG";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import Linkbutton from "../components/buttons/Linkbutton";
import Skills from "../components/Skills";

//Importing Helper
import { SkillList } from "../helpers/SkillList.js";
import EducationBlock from "../components/EducationBlock";
import FadeIn from "react-fade-in/lib/FadeIn";

export default class AboutMePage extends Component {
  //Lifecycle method that scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <FadeIn transitionDuration={750}>
          <article className="about-page">
            <header>
              <h1 className="page-title">About Me</h1>
            </header>
            <section className="about-desc">
              <section className="about-left-column">
                <img src={Memoji} width="1000" height="1000" />
                <p className="about-location">
                  <LocationOnIcon />
                  Johannesburg, South Africa
                </p>
              </section>
              <section className="about-right-column">
                <p className="body-text">
                  I'm Michael Parkin, a recent graduate with a degree in Digital
                  Arts - majoring in game, and interactive media, design.
                  Through my degree, I explored numerous different areas of
                  design and found my passion for designing good user
                  experiences. From UI/UX design, to front-end development, and
                  even game design.
                </p>
                <p className="body-text">
                  I am currently looking to further my passion by pursuing a
                  masters degree in this promising digital field. I am excited
                  to see what the future holds, and am eager to work with a team
                  of like-minded individuals to create innovative, accessible,
                  and engaging digital experiences.
                </p>
                <p className="body-text">
                  Out of the classroom you’ll find me playing board games,
                  taking photos, studying music, and petting all the good dogs.
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
        </FadeIn>
      </>
    );
  }
}
