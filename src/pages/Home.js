import React, { Component } from "react";
import "../styles/home.css";

import HeroBanner from "../components/HeroBanner";

export default class Home extends Component {
  render() {
    return (
      <>
        <HeroBanner />

        <article id="test">
          <h2>Portfolio</h2>
        </article>
      </>
    );
  }
}

{
  /* <header className="hero-banner">
<section>
  <h1>Hi, I'm Michael 👋🏻</h1>
  <p className="sub-text">A Game Designer</p>
  <br />
  <p className="sub-text">A Game Designer</p>
</section>

<section className="square">
  <p>👋🏻</p>
</section>
</header> */
}