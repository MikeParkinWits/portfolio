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
import CompetitiveAnalysis from "../../assets/PortfolioPageAssets/Portfolio6/CompetitiveAnalysis-2.png";
import InterviewImageSide from "../../assets/PortfolioPageAssets/Portfolio6/InterviewImage-Side.png";
import StakeholderDiagram from "../../assets/PortfolioPageAssets/Portfolio6/StakeholderDiagram.png";
import InterviewImage from "../../assets/PortfolioPageAssets/Portfolio6/InterviewImage.png";
import HTAOne from "../../assets/PortfolioPageAssets/Portfolio6/HTAOne.png";
import HTATwo from "../../assets/PortfolioPageAssets/Portfolio6/HTATwo.png";

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
                  title={"Brief Overview of Timeline for Project"}
                  singleCard={"single-card"}
                />

                <h3 className="portfolio-page-heading-2 line-class">
                  🕵🏼‍♂️ Discovering the Problem Space
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
                      To start, an analysis was done of five common systems that
                      exist for pet adoption - visiting/interacting with the
                      service where possible.
                    </p>
                    <ul className="portfolio-bullet-cont">
                      <b className="bio-bold">Traditional Shelters</b>{" "}
                      <li className="portfolio-bullet">
                        In-person shelter adoption involves potential adopters
                        navigating through individual stalls to choose a pet,
                        creating an environment for personal interaction and
                        discovery. While this approach suits some, it can be
                        overwhelming or discouraging for others because of the
                        odors and loud noises.
                      </li>
                      <br />
                      <b className="bio-bold">Adoption Websites</b>
                      <li className="portfolio-bullet">
                        Adoption websites play an important role in the adoption
                        process, displaying adoptable pets to adopters, allowing
                        them to view these pets from anywhere they wish.
                        However, potential adopters still need to go to a
                        shelter to actually adopt the pet.
                      </li>
                      <br />
                      <b className="bio-bold">
                        Neighborhood Applications, Social Media Channels, & Word
                        of Mouth
                      </b>
                      <li className="portfolio-bullet">
                        While more informal, these adoption methods are often
                        done among individuals with pre-existing connections.
                        This ultimately fosters a heightened sense of trust
                        between adopters and those giving away the pet,
                        promoting increased transparency in understanding the
                        pet's behavior.
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
                  Based on initial research into the topic space, for this
                  project the team chose to focus on{" "}
                  <b className="bio-bold">
                    young adult, first-time pet adopters
                  </b>{" "}
                  who, being unfamiliar with pet adoption, stand to benefit the
                  most from an innovative and novel adoption solution. In
                  addition, this group is often frustrated with existing
                  adoption technologies and would greatly benefit from a more
                  user-friendly, engaging platform designed to connect them
                  seamlessly with the pets they desire.
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
                    "Diagram showing the primary, secondary, and tertiary stakeholders"
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

                <h3 className="portfolio-page-heading-2 line-class">
                  🎯 Requirements Gathering
                </h3>

                <p className="sub-head-p">
                  Having explored the topic space at hand, the team then moved
                  on to exploring how we can address the issue of facilitating
                  pet adoption - starting with semi-structured interviews of our
                  target group.
                </p>

                <section className="portfolio-double-figures">
                  <section>
                    <h4 className="portfolio-page-heading-3">
                      Semi-Structured Interviews
                    </h4>
                    <p className="sub-head-p">
                      Our semi-structured interviews aimed to gather more
                      qualitative data and dive deeper into some reasons and
                      behaviors with young-adult adopters. While our target user
                      group was first-time adopters,{" "}
                      <b className="bio-bold">
                        we chose to interview participants with varying levels
                        of adoption experience
                      </b>{" "}
                      in order to understand how the adoption process has
                      changed over time. All interviews were then conducted over
                      Zoom, giving our participants and us the most flexibility.
                    </p>
                  </section>
                  <PortfolioPageFigure
                    imageSource={InterviewImage}
                    figureCaption={""}
                    title={"Screenshot of Semi-structured User Interview"}
                    singleCard={"single-card"}
                  />
                </section>

                <h4 className="portfolio-page-heading-3">Findings</h4>

                <p className="sub-head-p">
                  After all interviews were completed, we held an interpretation
                  session and constructed an affinity map to consolidate and
                  organize our data across multiple users and uncover important
                  insights.
                </p>

                <section>
                  <iframe
                    width="768"
                    height="432"
                    src="https://miro.com/app/live-embed/uXjVNfpbLH4=/?moveToViewport=-5451,-4515,11435,3319&embedId=816810461659"
                    frameborder="0"
                    scrolling="no"
                    allow="fullscreen; clipboard-read; clipboard-write"
                    allowfullscreen
                    className="portfolio-figma"
                  ></iframe>
                </section>

                <p className="sub-head-p">
                  <b className="bio-bold">Key Takeaways</b>
                </p>

                <section className="findings-grid-findings">
                  <FindingsCard
                    cardNumber={"1"}
                    cardFinding={
                      "Young adults are fairly tech literate and felt let down by existing digital pet adoption solutions"
                    }
                  />
                  <FindingsCard
                    cardNumber={"2"}
                    cardFinding={
                      "First-time pet adopters have little, to no, experience with pet care"
                    }
                  />
                  <FindingsCard
                    cardNumber={"3"}
                    cardFinding={
                      "The primary motiviation for wanting a pet was either companionship or emotional support"
                    }
                  />
                  <FindingsCard
                    cardNumber={"4"}
                    cardFinding={
                      "Adopters had preset preferences for the type of pet they wanted, leading to unrealistic expectations for that pets role in their life"
                    }
                  />
                  <FindingsCard
                    cardNumber={"5"}
                    cardFinding={
                      "Most first-time adopters felt overwhlemed by the pet selection process and didn't know how to start"
                    }
                  />
                </section>

                <h4 className="portfolio-page-heading-3">
                  Hierarchical Task Analysis
                </h4>

                <p className="sub-head-p">
                  Based on the main findings from our interviews, we created{" "}
                  <b className="bio-bold">two hierarchical task analyses</b>.
                  This first task analysis represents{" "}
                  <b className="bio-bold">
                    how our target users currently select a pet to adopt
                  </b>
                  , and the second task analysis represents{" "}
                  <b className="bio-bold">
                    how our target users currently go about finalizing the
                    adoption process
                  </b>
                  .{" "}
                </p>

                <Carousel
                  autoPlay={true}
                  interval={10000}
                  infiniteLoop={true}
                  showArrows={false}
                  renderIndicator={this.renderCustomIndicator}
                  renderArrowPrev={this.renderCustomPrevArrow}
                  renderArrowNext={this.renderCustomNextArrow}
                  showStatus={false}
                  showIndicators={true}
                >
                  <PortfolioPageFigure
                    imageSource={HTAOne}
                    figureCaption={""}
                    title={"Screenshot of Semi-structured User Interview"}
                    singleCard={"single-card"}
                  />
                  <div>
                    <PortfolioPageFigure
                      imageSource={HTATwo}
                      figureCaption={""}
                      title={"Screenshot of Semi-structured User Interview"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                </Carousel>

                <h4 className="portfolio-page-heading-3">
                  Design Requirements
                </h4>
                <p className="sub-head-p">
                  As a result of our requirements-gathering activities, we
                  defined six high-level design requirements to advise our
                  future design decisions:
                </p>

                <ul className="portfolio-bullet-cont">
                  <li className="portfolio-bullet">
                    Our design{" "}
                    <b className="bio-bold">
                      should not assume prior knowledge of pet adoption
                    </b>
                  </li>
                  <li className="portfolio-bullet">
                    Our design{" "}
                    <b className="bio-bold">
                      should reflect how young adults interact with technology
                    </b>
                  </li>
                  <li className="portfolio-bullet">
                    Our design{" "}
                    <b className="bio-bold">
                      should accommodate users with sensory issues
                    </b>
                  </li>
                  <li className="portfolio-bullet">
                    Our design
                    <b className="bio-bold">
                      {" "}
                      should be affordable for adopters and shelters
                    </b>
                  </li>
                  <li className="portfolio-bullet">
                    Our design{" "}
                    <b className="bio-bold">
                      should have clear and accurate information about adoptable
                      pets
                    </b>
                  </li>
                  <li className="portfolio-bullet">
                    Our design{" "}
                    <b className="bio-bold">
                      should include a variety of pet species, rather than just
                      a few.
                    </b>
                  </li>
                </ul>

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
