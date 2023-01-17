import React, { Component } from "react";

import Memoji from "../assets/Me-2.JPG";
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
            <img src={Memoji}></img>
          </section>
        </section>
      </>
    );

    // return (
    //   <article className="hero">
    //     <section className="page-container">
    //       <header>
    //         <h1 className="hero-typography">
    //           Hi, I'm <span className="hero-name">Michael</span>
    //         </h1>
    //         <section className="hero-sub-text">
    //           <p>A Game Designer,</p>
    //           <br />
    //           <p>Software Developer,</p>
    //           <br />
    //           <p>And Overall Tech Enthusiast.</p>
    //           <Linkbutton
    //             buttonText={"My Portfolio"}
    //             buttonPath={"/portfolio"}
    //           />
    //           <Linkbutton buttonText={"About Me"} buttonPath={"/about_me"} />
    //         </section>
    //       </header>
    //     </section>

    //     <section className="hero-picture">
    //       <img src={Memoji} />
    //     </section>
    //   </article>
    // );
  }
}
