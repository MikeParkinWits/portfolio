import React, { Component } from "react";
import "../styles/aboutPage.css";

import Memoji from "../assets/Me-About.JPG";

import LocationOnIcon from "@mui/icons-material/LocationOn";

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
        </article>
      </>
    );
  }
}
