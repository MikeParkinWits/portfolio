import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import Skills from "../components/Skills";

import "../styles/portfolioPage.css";

//Importing Helper
import { PortfolioList } from "../helpers/PortfolioList.js";
import FadeIn from "react-fade-in/lib/FadeIn";

//Google Analytics Import
import ReactGA from "react-ga4";

export default class PortfolioPage extends Component {
  //Lifecycle method that scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);

    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Portfolio",
    });
  }

  render() {
    return (
      <>
        <FadeIn transitionDuration={750}>
          <article className="portfolio-page">
            <header className="portfolio-page-header">
              <h1 className="page-title">Portfolio</h1>
            </header>
            <section className="card-grid">
              {PortfolioList.slice(0, PortfolioList.length).map(
                (portfolioItem, value) => {
                  return (
                    <PortfolioCard
                      key={PortfolioList.length - value}
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
        </FadeIn>
      </>
    );
  }
}
