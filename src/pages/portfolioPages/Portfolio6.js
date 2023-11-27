import React, { Component } from "react";
import "../../styles/portfolioPages.css";

//Component Imports
import PortfolioPageFigure from "../../components/PortfolioPageFigure";
import PortfolioPageFigureLong from "../../components/PortfolioPageFigureLong";
import FindingsCard from "../../components/FindingsCard";

//Image Imports
import PortfolioImage from "../../assets/PortfolioPageAssets/PortfolioIcons/PawnderLogo.png";
import DoubleDiamondImage from "../../assets/PortfolioPageAssets/Portfolio5/DoubleDiamond-test.png";
import StakeholderDiagramImage from "../../assets/PortfolioPageAssets/Portfolio5/StakeholderDiagram-test.png";
import SWOTDiagramImage from "../../assets/PortfolioPageAssets/Portfolio5/SWOT-test.png";
import UserJourneyImage from "../../assets/PortfolioPageAssets/Portfolio5/UserJourney.png";
import StyleguideImage from "../../assets/PortfolioPageAssets/Portfolio5/Styleguide.png";
import HiFiWireframeOneImage from "../../assets/PortfolioPageAssets/Portfolio5/HiFidelityWireframes-1.png";
import HiFiWireframeTwoImage from "../../assets/PortfolioPageAssets/Portfolio5/HiFidelityWireframes-2.png";
import HiFiWireframeThreeImage from "../../assets/PortfolioPageAssets/Portfolio5/HiFidelityWireframes-3.png";
import HiFiWireframeFourImage from "../../assets/PortfolioPageAssets/Portfolio5/HiFidelityWireframes-4.png";
import HiFiWireframeFiveImage from "../../assets/PortfolioPageAssets/Portfolio5/HiFidelityWireframes-5.png";
import LoFiWireframeOneImage from "../../assets/PortfolioPageAssets/Portfolio5/LowFidelity/LowFidelityWireframes-1.png";
import LoFiWireframeTwoImage from "../../assets/PortfolioPageAssets/Portfolio5/LowFidelity/LowFidelityWireframes-2.png";
import LoFiWireframeThreeImage from "../../assets/PortfolioPageAssets/Portfolio5/LowFidelity/LowFidelityWireframes-3.png";
import LoFiWireframeFourImage from "../../assets/PortfolioPageAssets/Portfolio5/LowFidelity/LowFidelityWireframes-4.png";
import LoFiWireframeFiveImage from "../../assets/PortfolioPageAssets/Portfolio5/LowFidelity/LowFidelityWireframes-5.png";
import Crazy8Image from "../../assets/PortfolioPageAssets/Portfolio5/Crazy8.png";
import PawnderPreview from "../../assets/PortfolioCardImages/PawnderPreview-1.png";
import WorkInProgressImage from "../../assets/PortfolioPageAssets/Portfolio6/Untitled.png";
import PawnderPreviewTemp from "../../assets/PortfolioPageAssets/Portfolio6/PawnderTempPreview.png";

//Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Linkbutton from "../../components/buttons/Linkbutton";
import ExternalLinkbutton from "../../components/buttons/ExternalLinkButton";

import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

//FadeIn Package Import
import FadeIn from "react-fade-in/lib/FadeIn";

//Google Analytics Import
import ReactGA from "react-ga4";

//Carousel Package Import
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Portfolio5 extends Component {
  //Lifecycle method which scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);

    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Pawnder",
    });
  }

  //Custom Carousel Indicator Code
  indicatorStyles = {
    position: "absolute",
    bottom: "1rem", // Adjust the distance from the bottom
    width: "100%",
    textAlign: "center",
  };

  renderCustomIndicator = (onClickHandler, isSelected, index, label) => {
    const indicatorStyle = {
      display: "inline-block",
      width: "8px",
      height: "8px",
      margin: "0 5px", // Adjust the spacing between indicators
      borderRadius: "50%",
      background: isSelected ? "#2978b5" : "#ccc", // Change the color based on selection
      cursor: "pointer",
    };

    return (
      <span
        key={index}
        style={indicatorStyle}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        role="button"
        tabIndex={0}
        aria-label={`Go to slide ${index + 1}`}
        title={`${label}`}
      />
    );
  };

  //Custom Carousel Arrow Style Code
  arrowStyles = {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    width: "2rem",
    height: "2rem",
    cursor: "pointer",
    fontSize: "2rem",
  };

  renderCustomPrevArrow = (clickHandler) => (
    <div style={{ ...this.arrowStyles, left: 0 }} onClick={clickHandler}>
      <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#2978b5" }} />{" "}
    </div>
  );

  renderCustomNextArrow = (clickHandler) => (
    <div style={{ ...this.arrowStyles, right: 0 }} onClick={clickHandler}>
      <FontAwesomeIcon icon={faArrowRight} style={{ color: "#2978b5" }} />
    </div>
  );

  render() {
    return (
      <>
        <FadeIn transitionDuration={750}>
          <article className="portfolio-pages h-entry">
            <img
              className="banner-image"
              src={PawnderPreview}
              title={"Banner Image"}
              alt={"Banner Image"}
              width="1000"
              height="1000"
            ></img>

            <article>
              <header className="portfolio-header">
                <section className="portfolio-page-title-line">
                  <section>
                    <h1 className="portfolio-item-title p-name">
                      Pawnder (In Progress)
                    </h1>
                    <p className="portfolio-sub-title">
                      A dating-style app that aims to simplify the adoption
                      process for first-time, young adult, adopters
                    </p>
                  </section>
                  <img
                    className="portfolio-page-icon"
                    src={PortfolioImage}
                    //   title={imageTitle}
                    //   alt={imageAltText}
                  ></img>
                </section>

                <section className="portfolio-page-info">
                  <section>
                    <h2 className="portfolio-info-title">Role</h2>
                    <p className="portfolio-info-sub-title">
                      Lead UX Designer & UX Researcher
                    </p>
                  </section>
                  <section>
                    <h2 className="portfolio-info-title">Type</h2>
                    <p className="portfolio-info-sub-title">Team Project</p>
                  </section>
                  <section>
                    <h2 className="portfolio-info-title">Timeframe</h2>
                    <p className="portfolio-info-sub-title">3.5 Months</p>
                  </section>
                </section>
              </header>

              <section className="portfolio-page-contents e-content">
                <h2 className="portfolio-page-heading-1">Overview</h2>
                <section className="overview-grid">
                  <section className="overview-grid-item">
                    <h3 className="portfolio-page-heading-2 ">🔍</h3>
                    <h3 className="portfolio-page-heading-2 ">The Scenario</h3>
                    <p>
                      Finding a pet is an extremely involved and time-consuming
                      process, especially for young adult first-time pet
                      adopters who are unfamiliar with the entire process. It
                      involves numerous steps: from choosing your desired pet
                      breed, learning about pet care, visiting shelters,
                      aclimitzaing your pet... The list goes on.
                    </p>
                  </section>

                  <section className="overview-grid-item">
                    <h3 className="portfolio-page-heading-2 ">⚠️</h3>
                    <h3 className="portfolio-page-heading-2 ">The Problem</h3>
                    <p>
                      <b className="bio-bold-yellow">
                        How can we develop a solution that streamlines the pet
                        adoption process, providing assistance to young,
                        first-time, pet adopters?
                      </b>
                    </p>
                  </section>

                  <section className="overview-grid-item">
                    <h3 className="portfolio-page-heading-2 ">💡</h3>
                    <h3 className="portfolio-page-heading-2 ">The Solution</h3>
                    <p>
                      First-time, young adult, pet adopters noted that although
                      adoption agencies make use of technology, they are often
                      poorly designed and not well implemented. As such,{" "}
                      <b className="bio-bold-yellow">
                        a dating-style application that utilizes swiping
                        gestures to select pets
                      </b>{" "}
                      was designed - streamling the pet selection process.
                    </p>
                  </section>
                </section>

                <h3 className="portfolio-page-heading-2">🎨 Design Preview</h3>
                <PortfolioPageFigureLong
                  imageSource={PawnderPreviewTemp}
                  figureCaption={""}
                  title={
                    "User journey map showing process of driver when parking"
                  }
                  singleCard={"single-card"}
                />

                <section className="work-in-progress-container">
                  {" "}
                  <img
                    className="work-in-progress-image"
                    src={WorkInProgressImage}
                    title={"imageTitle"}
                    alt={"imageAltText"}
                  ></img>
                  <h2 className="portfolio-page-heading-1">Whoa!</h2>
                  <section>
                    <p>Looks Like I'm Still Working On This One!</p>
                    <p>Be Sure To Check Back Soon!</p>
                  </section>
                </section>
              </section>
            </article>
            {/* <BlogButtons type="Blog" /> */}
          </article>
        </FadeIn>
      </>
    );
  }
}
