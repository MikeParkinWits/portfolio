import BraaiSimulatorImage from "../assets/PortfolioCardImages/BraaiSimulatorPreview.png";
import TIWKImage from "../assets/PortfolioCardImages/TheInternetWeKnowPreview.png";
import SwingImage from "../assets/PortfolioCardImages/SwingPreview.png";

export const PortfolioList = [
  {
    cardTitle: "Braai Simulator",
    cardDate: "2021",
    cardSummary:
      "Braai Simulator is a 3D, first-person, life simulation game where the player hosts a braai (barbeque)",
    image: BraaiSimulatorImage,
    imageTitle: "Braai Simulator Image",
    imageAltText: "A computer with Braai Simulator Open",
    cardRoute: "/portfolio",
    cardType: "Game Design",
    isWeb: false,
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
    cardRoute: "/portfolio",
    cardType: "Web Development",
    isWeb: true,
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
    cardRoute: "/portfolio",
    cardType: "Game Design",
    isWeb: false,
    cardBackgroundClass: "gradient-blue",
  },
];
