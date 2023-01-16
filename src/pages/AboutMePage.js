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
            <p className="body-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              blanditiis repellendus excepturi illum similique sit reprehenderit
              repellat impedit voluptatibus? Mollitia minus ad iste hic pariatur
              dolore, excepturi quaerat tempore, enim suscipit minima, qui
              quisquam! Porro, totam voluptatibus assumenda accusamus, minima
              error excepturi voluptatum vel nostrum veniam amet harum eum
              dolores?
            </p>
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
