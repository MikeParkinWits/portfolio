import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard.js";
import Skills from "../components/Skills.js";

import "../styles/portfolioPage.css";

//Importing Helper
import { GamesList } from "../helpers/GamesList.js";
import FadeIn from "react-fade-in/lib/FadeIn";

//Google Analytics Import
import ReactGA from "react-ga4";

export default class GamePage extends Component {
  //Lifecycle method that scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);

    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Games",
    });
  }

  render() {
    return (
      <>
        <FadeIn transitionDuration={750}>
          <article className="portfolio-page">
            <header className="portfolio-page-header">
              <h1 className="page-title">Games</h1>
            </header>
            <section className="card-grid">
              {GamesList.slice(0, GamesList.length).map(
                (portfolioItem, value) => {
                  return (
                    <PortfolioCard
                      key={GamesList.length - value}
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
