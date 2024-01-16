import React, { Component } from "react";
import "../../styles/portfolioPages.css";
import "../../styles/buttons/portfolioPageButtons.css";

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
import Video from "../../assets/PortfolioPageAssets/Portfolio6/PawnderPreview.mov";
import Timeline from "../../assets/PortfolioPageAssets/Portfolio6/Timeline.png";
import CompetitiveAnalysis from "../../assets/PortfolioPageAssets/Portfolio6/CompetitiveAnalysis.png";
import StakeholderDiagram from "../../assets/PortfolioPageAssets/Portfolio6/StakeholderDiagram.png";

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
                      A dating-style application that aims to simplify the
                      adoption process for first-time, young adult, pet adopters
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
                      <b className="bio-bold">
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
                      <b className="bio-bold">
                        a dating-style application that utilizes familiar
                        swiping gestures to select pets
                      </b>{" "}
                      was designed - streamling the pet selection process.
                    </p>
                  </section>
                </section>

                <h3 className="portfolio-page-heading-2">🎨 Figma Prototype</h3>

                {/* <section className="portfolio-double-figures">
                  <section>
                    <p className="sub-head-p">
                      A video of, and link to the Figma prototype can be seen
                      here:
                    </p>
                  </section>
                  <video
                    ref={this.videoRef}
                    height="500"
                    autoPlay
                    loop
                    playsInline
                    muted
                  >
                    <source src={Video} type="video/mp4" />
                  </video>
                </section> */}

                <video
                  ref={this.videoRef}
                  height="600"
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="portfolio-video"
                >
                  <source src={Video} type="video/mp4" />
                </video>

                <section className="portfolio-buttons">
                  {" "}
                  <a
                    className={"portfolio-button"}
                    href="https://www.figma.com/file/4a1KC63nEZqvk4QN3BxRbN/D3-Design-(Copy)?type=design&node-id=127%3A177&mode=design&t=wg1DyeGXGDukcVSO-1"
                    target="_blank"
                  >
                    Open Figma Board
                  </a>
                </section>

                <h2 className="portfolio-page-heading-1">Details</h2>

                <h3 className="portfolio-page-heading-2">🗓️ Timeline</h3>

                <PortfolioPageFigureLong
                  imageSource={Timeline}
                  figureCaption={""}
                  title={
                    "User journey map showing process of driver when parking"
                  }
                  singleCard={"single-card"}
                />

                <h3 className="portfolio-page-heading-2 line-class">
                  🕵🏼‍♂️ Discover
                </h3>

                {/* <h4 className="portfolio-page-heading-3">Topic Exploration</h4>

                <p className="sub-head-p">
                  For this project, the team began by{" "}
                  <b className="bio-bold">
                    exploring the topic space of pet adoption in the United
                    States
                  </b>{" "}
                  through an in-depth literature review. This resulted in the
                  following key takeways about the space:
                </p>

                <section className="findings-grid-findings">
                  <FindingsCard
                    cardNumber={"1"}
                    cardFinding={
                      "Pet adopters all have their own set of preferences when it comes to pet adoption, which differ depending on the pet they're looking to adopt"
                    }
                  />
                  <FindingsCard
                    cardNumber={"2"}
                    cardFinding={
                      "Adopters with accurate expectations for animal care were less likely to return pets, and those returning animals for owner-related reasons were less likely to adopt again"
                    }
                  />
                  <FindingsCard
                    cardNumber={"3"}
                    cardFinding={
                      "More than half of all shelter animals in the US are euthanized"
                    }
                  />
                  <FindingsCard
                    cardNumber={"4"}
                    cardFinding={
                      "People adopt pets for a multitude of reasons, ranging from education for children to companionship"
                    }
                  />
                  <FindingsCard
                    cardNumber={"5"}
                    cardFinding={
                      "While the COVID-19 pandemic led to more pet adoptions, it also led to an uptick in animal cruelty and more instances of pet abandonment"
                    }
                  />
                </section> */}

                <h4 className="portfolio-page-heading-3">
                  Analysis of Existing Systems
                </h4>

                <section className="portfolio-double-figures">
                  <section>
                    {/* <p className="sub-head-p">
                      <b className="bio-bold">In-Person Shelters</b>
                    </p> */}

                    <p className="sub-head-p">
                      We began by performing an analysis of all of six existing
                      systems that exist for pet adoption. These include:{" "}
                      <b className="bio-bold">in-person shelters</b>,{" "}
                      <b className="bio-bold">various adoption websites</b>,{" "}
                      <b className="bio-bold">neighborhood applications</b>,{" "}
                      <b className="bio-bold">social media platforms</b>, and{" "}
                      <b className="bio-bold">word of mouth</b>. This resulted
                      in the following key takeaways:
                    </p>
                    <ul className="portfolio-bullet-cont">
                      <li className="portfolio-bullet">
                        <b className="bio-bold">
                          Traditional shelters were overwhelming for those
                          unfamiliar with pet adoption
                        </b>{" "}
                        because of the odors and loud barking, raising concerns
                        about the stress on both animals and visitors.
                      </li>
                      <li className="portfolio-bullet">
                        While there are existing digital platforms that
                        facilitate pet-adoption, they are sub-par and leave a
                        lot to be desired. Thus,{" "}
                        <b className="bio-bold">
                          many find it easier to just circumvent the existing
                          digital platforms.
                        </b>
                      </li>
                      <li className="portfolio-bullet">
                        Neighborhood applications, word of mouth, and social
                        media platforms{" "}
                        <b className="bio-bold">
                          acted as a low-risk way of initiating the pet adoption
                          process.
                        </b>
                        {""}
                      </li>
                    </ul>
                  </section>
                  <PortfolioPageFigure
                    imageSource={CompetitiveAnalysis}
                    figureCaption={""}
                    title={"Collage of all the existing systems analyzed"}
                    singleCard={"single-card"}
                  />
                </section>

                <h4 className="portfolio-page-heading-3">Target Users</h4>

                <p className="sub-head-p">
                  Based on our initial research, for this project we settled on
                  the target user of{" "}
                  <b className="bio-bold">
                    young adult, first-time, pet adopters
                  </b>
                  . This group represent an audience that is unfamiliar with pet
                  adoption and thus, has the most to gain from a novel pet
                  adoption solution. In addition, they are also well-versed in
                  technology and so can benefit greatly from a better
                  technological solution throughout the pet adoption journey. In
                  our research, we found that young adults experienced
                  frustration with existing technological systems for adoption
                  and so to address this our design aims to serve as an easy to
                  use, engaging platform that connects potential adopters to the
                  pets they want.
                </p>

                <h4 className="portfolio-page-heading-3">Stakeholders</h4>

                <p className="sub-head-p">
                  Through our research, we identified{" "}
                  <b className="bio-bold">two primary stakeholders </b>
                  and <b className="bio-bold">three secondary stakeholders</b>.
                  This can be seen in the diagram below:
                </p>

                <PortfolioPageFigure
                  imageSource={StakeholderDiagram}
                  figureCaption={""}
                  title={
                    "Diagram of all the diagram showing the primary, secondary, and tertiary stakeholders"
                  }
                  singleCard={"single-card"}
                />

                {/* <PortfolioPageFigureLong
                  imageSource={PawnderPreviewTemp}
                  figureCaption={""}
                  title={
                    "User journey map showing process of driver when parking"
                  }
                  singleCard={"single-card"}
                /> */}

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
