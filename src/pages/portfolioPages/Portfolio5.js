import React, { Component } from "react";
import "../../styles/portfolioPages.css";

//Component Imports
import PortfolioPageFigure from "../../components/PortfolioPageFigure";
import PortfolioPageFigureLong from "../../components/PortfolioPageFigureLong";
import FindingsCard from "../../components/FindingsCard";

//Image Imports
import PortfolioImage from "../../assets/PortfolioPageAssets/PortfolioIcons/ParkerIcon.png";
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
import ParkerBannerImage from "../../assets/PortfolioCardImages/ParkerPreview-1.png";

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
      title: "Portfolio 5",
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
              src={ParkerBannerImage}
              title={"Banner Image"}
              alt={"Banner Image"}
              width="1000"
              height="1000"
            ></img>

            <article>
              <header className="portfolio-header">
                <section className="portfolio-page-title-line">
                  <section>
                    <h1 className="portfolio-item-title p-name">Parker</h1>
                    <p className="portfolio-sub-title">
                      An app-based platform that aims to revolutionise on-street
                      parking in South Africa
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
                      Lead UX Designer, Researcher, and Developer
                    </p>
                  </section>
                  <section>
                    <h2 className="portfolio-info-title">Type</h2>
                    <p className="portfolio-info-sub-title">Solo Project</p>
                  </section>
                  <section>
                    <h2 className="portfolio-info-title">Timeframe</h2>
                    <p className="portfolio-info-sub-title">5 Months</p>
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
                      In South Africa, the experience of on-street parking can
                      turn stressful quickly. Finding an open parking spot seems
                      easy, but returning to your car often involves dealing
                      with informal 'car guards' soliciting money. What should
                      have been a simple process turns into a potentially
                      awkward encounter, disrupting the usual in-and-out
                      routine.
                    </p>
                  </section>

                  <section className="overview-grid-item">
                    <h3 className="portfolio-page-heading-2 ">⚠️</h3>
                    <h3 className="portfolio-page-heading-2 ">The Problem</h3>
                    <p>
                      <b className="bio-bold">
                        How can we enhance on-street parking in South Africa,
                        ensuring a safer and smoother experience for all?
                      </b>
                    </p>
                    <p>
                      Self-proclaimed 'car guards' in South Africa are
                      unreliable, often intoxicated, and offer minimal theft
                      protection. Their presence poses safety risks, especially
                      for solo female drivers at night, raising concerns about
                      reliability. This unique issue in South Africa remains
                      unexplored.
                    </p>
                  </section>

                  <section className="overview-grid-item">
                    <h3 className="portfolio-page-heading-2 ">💡</h3>
                    <h3 className="portfolio-page-heading-2 ">The Solution</h3>
                    <p>
                      After multiple iterations and user testing sessions, the
                      idea of creating an{" "}
                      <b className="bio-bold">app-based platform</b>, for mobile
                      devices, that{" "}
                      <b className="bio-bold">
                        connects drivers directly to on-street parking guards
                      </b>{" "}
                      was chosen. This ultimately makes the process of on-street
                      parking in South Africa much more convenient and safer for
                      everyone.
                    </p>
                  </section>
                </section>

                {/* <h3 className="portfolio-page-heading-2">🎥 Final Product</h3> */}
                <section className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/YZ9O5MSITwk"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                    className="video"
                  />
                </section>
                <h2 className="portfolio-page-heading-1">Details</h2>
                <p>
                  With an overview of the project, we can then look more closely
                  at the entire process below:
                </p>

                <h3 className="portfolio-page-heading-2">🎨 Design Process</h3>
                <p>
                  The project can be divided into{" "}
                  <b className="bio-bold">four main areas</b> based on the
                  double-diamond design process. The following graphic gives an
                  overview of the steps and tasks involved in each one.
                </p>
                <PortfolioPageFigure
                  imageSource={DoubleDiamondImage}
                  figureCaption={""}
                  title={"Double diamond diagram showing design process"}
                  singleCard={"single-card"}
                />
                <h3 className="portfolio-page-heading-2 line-class">
                  🕵🏼‍♂️ Discover
                </h3>
                <h4 className="portfolio-page-heading-3">
                  Stakeholder Analysis
                </h4>

                <section className="portfolio-double-figures">
                  <section>
                    <p className="sub-head-p">
                      Including all possible stakeholders in the design process
                      is essential to create the best suitable design for all
                      party's involved. As such, I have created an illustrated
                      account of all the stakeholders and their relationship to
                      one another. In this case, there are then two main
                      stakeholders:
                    </p>

                    <ul className="portfolio-bullet-cont">
                      <li className="portfolio-bullet">
                        <b className="bio-bold">Drivers:</b> The primary target
                        user of the app, seeking a safer and more convenient
                        on-street parking experience
                      </li>
                      <li className="portfolio-bullet">
                        <b className="bio-bold">On-Street Car Guards:</b> Those
                        who use the app to connect with drivers, providing their
                        services and receiving compensation in a more organized
                        and transparent manner.
                      </li>
                    </ul>
                  </section>
                  <PortfolioPageFigure
                    imageSource={StakeholderDiagramImage}
                    figureCaption={""}
                    title={
                      "Stakeholder diagram showing the primary, secondary, and tertiary stakeholders"
                    }
                    singleCard={"single-card"}
                  />
                </section>

                <h4 className="portfolio-page-heading-3">
                  User Needs Research
                </h4>
                <p className="sub-head-p">
                  To enhance the on-street parking experience in South Africa, I
                  conducted comprehensive user research, including{" "}
                  <b className="bio-bold">surveys</b> and{" "}
                  <b className="bio-bold">semi-structured interviews</b>. The
                  surveys, involving 42 participants from diverse backgrounds,
                  aimed to uncover prevalent issues with on-street parking,
                  particularly concerning informal 'car guards.' Key questions
                  explored safety concerns, guard reliability, and overall
                  parking experiences. Findings are discussed in the subsequent
                  section.
                </p>

                <p className="sub-head-p">
                  Recognizing the limitations of surveys, I complemented the
                  research with in-depth semi-structured interviews involving a
                  group of 4 participants, including frequent and solo female
                  drivers. These interviews revealed nuanced emotional and
                  experiential aspects of the on-street parking scenario,
                  detailed further in the findings section.
                </p>

                <h4 className="portfolio-page-heading-3">
                  Competitive Analysis
                </h4>
                <p className="sub-head-p">
                  After looking through the research data, which focused on the
                  on-street parking experiences in general, I performed a
                  competitive analysis of other parking services and systems in
                  South Africa. While I considered looking at similair
                  international services, I decided that given the cultural
                  differences that it would not be worthwhile. All of this then
                  resulted in three competitors being identified in the space at
                  the time: two off-street parking services,{" "}
                  <b className="bio-bold">KaChing</b> and{" "}
                  <b className="bio-bold">Admyt</b>; and one on-street parking
                  service, <b className="bio-bold">ParkFind</b>.
                </p>

                <section className="portfolio-double-figures">
                  <PortfolioPageFigure
                    imageSource={SWOTDiagramImage}
                    figureCaption={""}
                    title={
                      "A SWOT diagram of all the parking service competitors in South Africa"
                    }
                    singleCard={"single-card in-double"}
                  />

                  <section>
                    {" "}
                    <p className="sub-head-p">
                      Having performed a SWOT (Strengths, Weaknesses,
                      Oppurtunities, Threats) analysis of these competitors, the
                      following information was noted:
                    </p>
                    <ul className="portfolio-bullet-cont">
                      <li className="portfolio-bullet">
                        None of the existing parking apps or services have
                        gained traction in South Africa.
                      </li>
                      <li className="portfolio-bullet">
                        The primary issue is the added complexity rather than
                        simplification of the parking process.
                      </li>
                      <li className="portfolio-bullet">
                        Although off-street parking solutions like KaChing and
                        Admyt promote 'ticketless entry,' they frequently face
                        issues with malfunctioning AI cameras, forcing users to
                        revert to traditional ticket systems.
                      </li>
                      <li className="portfolio-bullet">
                        ParkFind, designed to modernize parking meters, falls
                        short by transferring existing parking meter
                        complexities, such as choosing parking duration and
                        limited hours, to a mobile application.
                      </li>
                      <li className="portfolio-bullet">
                        Overall, the competitive landscape highlights
                        significant opportunities for innovation and improvement
                        in the on-street parking sector in South Africa.
                      </li>
                    </ul>
                  </section>
                </section>

                <h3 className="portfolio-page-heading-2 line-class">
                  🎯 Define
                </h3>
                <h4 className="portfolio-page-heading-3">Findings</h4>

                <section className="findings-grid-findings">
                  <FindingsCard
                    cardNumber={"1"}
                    cardFinding={
                      "Participants expressed increased safety concerns due to unpredictable informal 'car guards’"
                    }
                  />
                  <FindingsCard
                    cardNumber={"2"}
                    cardFinding={
                      "Participants doubted the car guards' effectiveness in genuinely preventing car theft"
                    }
                  />
                  <FindingsCard
                    cardNumber={"3"}
                    cardFinding={
                      "Participants often reported 'car guards' as intoxicated or unreliable, casting doubt on their ability to provide protection"
                    }
                  />
                  <FindingsCard
                    cardNumber={"4"}
                    cardFinding={
                      "Participants characterized the current situation as a routine process turned stressful"
                    }
                  />
                  <FindingsCard
                    cardNumber={"5"}
                    cardFinding={
                      "Participants worried about carrying cash for tipping, feeling pressured to give money to avoid confrontations"
                    }
                  />
                  <FindingsCard
                    cardNumber={"6"}
                    cardFinding={
                      "Female drivers emphasized increased vulnerability when unexpectedly confronted by 'car guards"
                    }
                  />
                </section>

                <p className="sub-head-p">
                  From the research performed, there is clearly a pressing need
                  for innovation in the on-street parking landscape in South
                  Africa. Users crave a solution that not only ensures safety
                  and reliability but also addresses the emotional impact of the
                  current system. The integration of a cashless transaction
                  system, enhanced safety measures, and a user-friendly
                  interface emerged as key priorities for improving the
                  on-street parking experience in South Africa. These insights
                  will guide the development of a solution that aligns with the
                  unique needs and challenges faced by drivers in the region.
                </p>

                <h4 className="portfolio-page-heading-3">
                  Design Requirements
                </h4>
                <p className="sub-head-p">
                  Through these findings, three high-level design requirements
                  were developed to ensure high relevance to the goal that is
                  trying to be achieved:
                </p>

                <ul className="portfolio-bullet-cont">
                  <li className="portfolio-bullet">
                    The solution should{" "}
                    <b className="bio-bold">
                      provide a sense of safety to the user
                    </b>
                    , knowing who is looking after their car at all times
                  </li>
                  <li className="portfolio-bullet">
                    Users should be able to{" "}
                    <b className="bio-bold">rely on a digital payment method</b>
                    , alleviating cash and the potential unknown cost of parking
                  </li>
                  <li className="portfolio-bullet">
                    Parking guards should have{" "}
                    <b className="bio-bold">appropriate training and skills</b>,
                    making sure that they are a reliable guard for your car
                  </li>
                </ul>

                <h3 className="portfolio-page-heading-2 line-class">
                  🛠️ Develop
                </h3>
                <h4 className="portfolio-page-heading-3">
                  Ideation & Final Decision
                </h4>
                <section className="portfolio-double-figures">
                  <section>
                    <p className="sub-head-p">
                      Based on the research and design requirements listed, I
                      then performed a brainstorming session on FigJam to
                      develop potential solutions to this problem - which can be
                      seen below. Thereafter, I went through each idea and tried
                      to combine, and filter them into the best ones. From this,
                      I then ultimately landed on the idea of{" "}
                      <b className="bio-bold">
                        creating a SaaS application that connects drivers to
                        verified on-street car guards.
                      </b>
                    </p>
                  </section>
                  {/* <iframe
                  // style="border: 1px solid rgba(0, 0, 0, 0.1);"
                  width="800"
                  height="650"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxkgKGLBPjnOdr1ZN3wh6y0%2FBrainstorm-crazy-8s-(Community)%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DbgV1pamu5fdx1iQP-1"
                  allowfullscreen
                  className="portfolio-figma"
                /> */}

                  <PortfolioPageFigure
                    imageSource={Crazy8Image}
                    figureCaption={""}
                    title={
                      "User journey map showing process of driver when parking"
                    }
                    singleCard={"single-card"}
                  />
                </section>

                <h4 className="portfolio-page-heading-3">User Journey</h4>
                <p className="sub-head-p">
                  With a design solution chosen, I then went on to develop a
                  standard user journey for the driver in order to better
                  understand how a user might use the application and how it
                  should function.
                </p>

                <PortfolioPageFigure
                  imageSource={UserJourneyImage}
                  figureCaption={""}
                  title={
                    "User journey map showing process of driver when parking"
                  }
                  singleCard={"single-card"}
                />

                <h4 className="portfolio-page-heading-3">Design Language</h4>

                <p className="sub-head-p">
                  Thereafter, I went on to create a design language for the
                  application - ensuring its style is minimalist and easy to
                  understand.
                </p>

                <PortfolioPageFigure
                  imageSource={StyleguideImage}
                  figureCaption={""}
                  title={"Styleguide for Parker"}
                  singleCard={"single-card"}
                />

                <h4 className="portfolio-page-heading-3">
                  Low-Fidelity Wireframes
                </h4>

                <p className="sub-head-p">
                  Using Figma, I then developed a series of low-fidelity
                  wireframes for the driver application. It is important to note
                  that like other SaaS applications, Parker requires a customer
                  (the driver) and provider (the car guard) applications, but{" "}
                  for the sake of scope{" "}
                  <b className="bio-bold">
                    this project focuses solely on the customer side.
                  </b>
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
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={LoFiWireframeOneImage}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 1</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={LoFiWireframeTwoImage}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={LoFiWireframeThreeImage}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={LoFiWireframeFourImage}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={LoFiWireframeFiveImage}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                </Carousel>

                <h4 className="portfolio-page-heading-3">
                  High-Fidelity Wireframes
                </h4>

                <p className="sub-head-p">
                  I then used these low-fidelity wireframes, along with feedback
                  sessions to develop a set of high-fidelity wireframes.
                  Thereafter, Swift & SwiftUI were used to turn those
                  high-fidelity wireframes into a working prototype, which was
                  seen in the video earlier.
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
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={HiFiWireframeOneImage}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 1</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={HiFiWireframeTwoImage}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={HiFiWireframeThreeImage}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={HiFiWireframeFourImage}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={HiFiWireframeFiveImage}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                </Carousel>

                <h3 className="portfolio-page-heading-2 line-class">
                  ✅ Deliver
                </h3>
                <h4 className="portfolio-page-heading-3">User Testing</h4>

                <p className="sub-head-p">
                  In a discounted evaluation, I made use of{" "}
                  <b className="bio-bold">task-based testing</b>, alongside a{" "}
                  <b className="bio-bold"> semi-structured interview</b> to test
                  my design solution and prototype. I conducted all of the tests
                  with 2 participants in their mid 20s. All participants had a
                  driver's license and were familair with the problem space.
                  Throughout testing, I also asked users to{" "}
                  <b className="bio-bold">think aloud</b>. The{" "}
                  <b className="bio-bold">task scenarios</b> used to test this
                  were:
                </p>

                <ul className="portfolio-bullet-cont">
                  <li className="portfolio-bullet">
                    Imagine you are out and have used on-street parking. How
                    would you check your current parking time and cost?
                    <br />
                    <b className="bio-bold">Rationale:</b> The first task
                    scenario aims to cover the primary purpose of the app,
                    seeing if users know and understand how to perform one of
                    its main actions.
                  </li>
                  <li className="portfolio-bullet">
                    Imagine you are have just gotten home after using on-street
                    parking and want to rate your car guard, how would you do
                    this? <br />
                    <b className="bio-bold">Rationale:</b> After completing the
                    primary function, I wanted to test the users ability to find
                    previous parking sessions.
                  </li>
                </ul>

                <h4 className="portfolio-page-heading-3">
                  Reflection & Suggestions
                </h4>

                <p className="sub-head-p">
                  Overall, I believe that through the process outlined above, I
                  was able to land on an innovative solution to a problem that
                  is evident on a daily basis to South African drivers. While I
                  am happy with the solution I developed, during final user
                  testing there were a handful of suggestions given for further
                  improvement. These include:
                </p>

                <ul className="portfolio-bullet-cont">
                  <li className="portfolio-bullet">
                    <b className="bio-bold">
                      Diversify User Testing Demographics:
                    </b>{" "}
                    While the discounted evaluation provides valuable feedback,
                    I should consider expanding the user testing pool to include
                    a more diverse demographic, ensuring a broader
                    representation of potential users. This could uncover
                    additional insights and perspectives that may influence the
                    final design.
                  </li>
                  <li className="portfolio-bullet">
                    <b className="bio-bold">Improve Visual Design Language:</b>{" "}
                    While users noted the app was easy to use and presented a
                    minimalist aesthetic, users advised designing a visual
                    design language that was more unique and had its own brand
                    identity.
                  </li>
                  <li className="portfolio-bullet">
                    <b className="bio-bold">
                      Integrate More Deeply with Private Security Companies:
                    </b>{" "}
                    In South Africa, private security companies are extremely
                    popular. Users would have liked to see a deeper integration
                    with these companies when a car guard is watching their
                    vehicle.
                  </li>
                </ul>
              </section>
            </article>
            {/* <BlogButtons type="Blog" /> */}
          </article>
        </FadeIn>
      </>
    );
  }
}
