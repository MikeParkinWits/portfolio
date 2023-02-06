import React, { Component } from "react";

//Image Imports
import BannerPhoto from "../assets/MeBannerPhoto.jpg";

//Component Imports
import HeroButton from "../components/buttons/HeroButton";
import Linkbutton from "../components/buttons/Linkbutton";

export default class HeroBanner extends Component {
  render() {
    return (
      <>
        <section className="homepage-card">
          <section className="homepage-card-info">
            <h1>
              Hi, I'm <span className="hero-name">Michael</span>
            </h1>
            <section className="homepage-card-content">
              <p>A Game Designer,</p>
              <p>Software Developer,</p>
              <p>And Overall Tech Enthusiast.</p>
            </section>
            <section className="homepage-card-buttons">
              <Linkbutton
                buttonText={"My Portfolio"}
                buttonPath={"/portfolio"}
              />
              <Linkbutton buttonText={"About Me"} buttonPath={"/about_me"} />
            </section>
          </section>

          <section className="homepage-card-image">
            <img src={BannerPhoto} width="1000" height="1000"></img>
          </section>
        </section>
      </>
    );
  }
}
