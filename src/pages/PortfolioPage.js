import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import Skills from "../components/Skills";

import "../styles/portfolioPage.css";

export default class PortfolioPage extends Component {
  render() {
    return (
      <>
        <article className="about-page">
          <header>
            <h1 className="page-title">Portfolio</h1>
          </header>
          <section className="portfolio-grid">
            <PortfolioCard />
          </section>
        </article>
      </>
    );
  }
}
