import BraaiSimulatorImage from "../assets/PortfolioCardImages/BraaiSimulatorPreview.png";
import TIWKImage from "../assets/PortfolioCardImages/TheInternetWeKnowPreview.png";
import SwingImage from "../assets/PortfolioCardImages/SwingPreview.png";
import GameDesignResearchPaper from "../assets/PortfolioCardImages/GameDesignResearchPaperPreview.png";
import UIUXResearchPaper from "../assets/PortfolioCardImages/UIUXResearchPaperPreview.png";

export const PortfolioList = [
  {
    cardTitle: "Braai Simulator",
    cardDate: "2021",
    cardSummary:
      "Braai Simulator is a 3D, first-person, life simulation game where the player hosts a braai (barbeque)",
    image: BraaiSimulatorImage,
    imageTitle: "Braai Simulator Image",
    imageAltText: "A computer with Braai Simulator Open",
    cardRoute: "/project/project3",
    cardType: "Game Design",
    type: "game-dev",
    cardBackgroundClass: "gradient-green",
  },
  {
    cardTitle: "The Internet We Know",
    cardDate: "2022",
    cardSummary:
      "An interactive net artwork that critiques the ever increasing dark design patterns used on the web",
    image: TIWKImage,
    imageTitle: "JavaScript Logo",
    imageAltText: "JavaScript Logo",
    cardRoute: "/project/project2",
    cardType: "Web Development",
    type: "web-dev",
    cardBackgroundClass: "gradient-pink",
  },
  {
    cardTitle: "Swing",
    cardDate: "2021",
    cardSummary:
      "A 2D, arcade, game where players swing around an endless playground",
    image: SwingImage,
    imageTitle: "JavaScript Logo",
    imageAltText: "JavaScript Logo",
    cardRoute: "/project/project1",
    cardType: "Game Design",
    type: "game-dev",
    cardBackgroundClass: "gradient-blue",
  },
];
