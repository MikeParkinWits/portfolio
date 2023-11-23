import React, { Component } from "react";

//Importing External Packages
import { Link } from "react-router-dom";

//Importing Styles
import "../styles/portfolioCard.css";

//Image Imports
import TestImageOne from "../assets/PortfolioCardImages/BraaiSimulatorPreview.png";

export default class FindingsCard extends Component {
  static defaultProps = {
    cardNumber: "0",
    cardFinding: "Finding",
  };

  render() {
    const { cardNumber, cardFinding } = this.props;

    return (
      <>
        <section className="findings-overview-grid-item">
          <section className="grid-square">
            {" "}
            <h3 className="portfolio-page-heading-2 ">{cardNumber}</h3>
          </section>
          <p>{cardFinding}</p>
          {/* Add your other content for the first item here */}
        </section>
      </>
    );
  }
}

{
  /* <section className="portfolio-card">
  <Link className="portfolio-card-link" to={cardRoute}>
    <img
      className="portfolio-card-image"
      src={image}
      title={imageTitle}
      alt={imageAltText}
    ></img>
    <section className="portfolio-card-content">
      <header>
        <h2>{cardTitle}</h2>
        <time dateTime={cardDate}>{cardDate}</time>
        <p className={isWeb ? "project-type web-dev" : "project-type game-dev"}>
          {cardType}
        </p>
      </header>
      <p className="portfolio-card-desc">{cardSummary}</p>
    </section>
  </Link>
</section>; */
}
