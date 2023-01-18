import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import Skills from "../components/Skills";

import "../styles/portfolioPage.css";

export default class PortfolioPage extends Component {
  render() {
    return (
      <>
        <article className="portfolio-page">
          <header>
            <h1 className="page-title">Portfolio</h1>
          </header>
          <section className="card-grid">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </section>
        </article>
      </>
    );
  }
}
