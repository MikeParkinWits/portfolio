import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import Skills from "../components/Skills";

import "../styles/portfolioPage.css";

//Importing Helper
import { ResearchList } from "../helpers/ResearchList.js";
import FadeIn from "react-fade-in/lib/FadeIn";

export default class WritingPage extends Component {
  //Lifecycle method that scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        {/* <FadeIn transitionDuration={750}> */}
        <article className="portfolio-page">
          <header className="portfolio-page-header">
            <h1 className="page-title">Research Papers</h1>
          </header>
          <section className="research-card-grid">
            {ResearchList.slice(0, ResearchList.length).map(
              (portfolioItem, value) => {
                return (
                  <PortfolioCard
                    key={ResearchList.length - value}
                    cardTitle={portfolioItem.cardTitle}
                    cardSummary={portfolioItem.cardSummary}
                    image={portfolioItem.image}
                    imageTitle={portfolioItem.imageTitle}
                    imageAltText={portfolioItem.imageAltText}
                    cardRoute={portfolioItem.cardRoute}
                    cardType={portfolioItem.cardType}
                    type={portfolioItem.type}
                    cardBackgroundClass={portfolioItem.cardBackgroundClass}
                  />
                );
              }
            )}
          </section>
        </article>
        {/* </FadeIn> */}
      </>
    );
  }
}
