import React, { Component } from "react";
import "../styles/aboutPage.css";

import Memoji from "../assets/Me-About.JPG";
import WitsLogo from "../assets/WitsLogo.png";
import GeorgiaTechLogo1 from "../assets/GeorgiaTechLogo1.png";
import GeorgiaTechLogo2 from "../assets/GeorgiaTechLogo2.jpeg";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import Linkbutton from "../components/buttons/Linkbutton";
import Skills from "../components/Skills";

//Importing Helper
import { SkillList } from "../helpers/SkillList.js";
import EducationBlock from "../components/EducationBlock";
import FadeIn from "react-fade-in/lib/FadeIn";

//Google Analytics Import
import ReactGA from "react-ga4";

export default class AboutMePage extends Component {
  //Lifecycle method that scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);

    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "About",
    });
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
                  Atlanta, Georgia, USA
                </p>
              </section>
              <section className="about-right-column">
                <p className="body-text">
                  Hi, I’m <b className="bio-bold">Michael Parkin</b>, a recent
                  Digital Arts graduate from the University of the
                  Witwatersrand, one of the top universities in Sub-Saharan
                  Africa. During my undergraduate degree, I explored numerous
                  areas of design, ultimately discovering my passion for
                  crafting exceptional user experiences. From UX design, to
                  front-end development, and even game design.
                </p>
                <p className="body-text">
                  As such, I am currently furthering my passion by pursuing a{" "}
                  <b className="bio-bold">masters degree</b> at{" "}
                  <b className="bio-bold">Georgia Tech</b> in{" "}
                  <b className="bio-bold">Human-Computer Interaction</b>,
                  specializing in <b className="bio-bold">UX Design</b>. I'm
                  excited to delve deeper into this field and work alongside
                  like-minded individuals to create innovative, accessible, and
                  engaging digital experiences.
                </p>
                <p className="body-text">
                  Beyond the academic world, you'll often find me immersed in
                  board games, video games, and capturing moments through
                  photography.
                </p>
              </section>
            </section>

            <section className="about-education">
              <header>
                <h2 className="page-sub-title">Education</h2>
                <EducationBlock
                  educationImage={GeorgiaTechLogo2}
                  educationName="Georgia Institute of Technology"
                  educationQualification="Master of Science in Human-Computer Interaction"
                  educationYear="2023 - 2025"
                />
                <EducationBlock
                  educationImage={WitsLogo}
                  educationName="The University of the Witwatersrand"
                  educationQualification="Bachelor of Arts in Digital Arts (Game, and Interactive Media,
                  Design)"
                  educationYear="2019 - 2022"
                />
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
