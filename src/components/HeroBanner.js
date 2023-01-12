import React, { Component } from "react";

import Memoji from "../assets/Me-2.JPG";
import HeroButton from "../components/buttons/HeroButton";
import Linkbutton from "../components/buttons/Linkbutton";

export default class HeroBanner extends Component {
  render() {
    return (
      <article className="hero">
        <section className="page-container">
          <header>
            <h1 className="hero-typography">
              Hi, I'm <span className="hero-name">Michael</span>
            </h1>
            <section className="hero-sub-text">
              <p>A Game Designer,</p>
              <br />
              <p>Software Developer,</p>
              <br />
              <p>And Overall Tech Enthusiast.</p>
              <HeroButton buttonText={"view portfolio"} />
              <Linkbutton buttonText={"about me"} />
            </section>
          </header>
        </section>

        <section className="hero-picture">
          <img src={Memoji} />
        </section>
      </article>
    );
  }
}
