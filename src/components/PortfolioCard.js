import React, { Component } from "react";

//Importing External Packages
import { Link } from "react-router-dom";

//Importing Styles
import "../styles/portfolioCard.css";

//Image Imports
import TestImage from "../assets/PortfolioCardImages/BraaiSimulatorPreview.png";

export default class PortfolioCard extends Component {
  static defaultProps = {
    cardTitle: "Card Title 1",
    cardDate: "2022",
    cardSummary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, placeat.",
    image: TestImage,
    imageTitle: "Card Test Image",
    imageAltText: "A flat black and grey image of shapes",
    cardRoute: "/contact",
    cardType: "Web Development",
    isWeb: true,
  };

  render() {
    const {
      cardTitle,
      cardDate,
      cardSummary,
      image,
      imageTitle,
      imageAltText,
      cardRoute,
      cardType,
      isWeb,
    } = this.props;

    return (
      <>
        <section className="portfolio-card">
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
                {/* <time dateTime={cardDate}>{cardDate}</time> */}
                <p
                  className={
                    isWeb ? "project-type web-dev" : "project-type game-dev"
                  }
                >
                  {cardType}
                </p>
              </header>
              <p className="portfolio-card-desc">{cardSummary}</p>
            </section>
          </Link>
        </section>
      </>
    );
  }
}
