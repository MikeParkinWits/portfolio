import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import Skills from "../components/Skills";

import "../styles/portfolioPage.css";

//Importing Helper
import { PortfolioList } from "../helpers/PortfolioList.js";

export default class PortfolioPage extends Component {
  render() {
    return (
      <>
        <article className="portfolio-page">
          <header>
            <h1 className="page-title">Portfoli</h1>
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
                    isWeb={portfolioItem.isWeb}
                    cardBackgroundClass={portfolioItem.cardBackgroundClass}
                  />
                );
              }
            )}
          </section>
        </article>
      </>
    );
  }
}
