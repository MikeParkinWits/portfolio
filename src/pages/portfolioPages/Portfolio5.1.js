import React, { Component } from "react";
import TestImageOne from "../../assets/PortfolioPageAssets/PortfolioIcons/ParkerIcon.png";
import Figure3Image from "../../assets/PortfolioPageAssets/Portfolio5/DoubleDiamond-test.png";
import Figure4Image from "../../assets/PortfolioPageAssets/Portfolio5/StakeholderDiagram-test.png";
import Figure5Image from "../../assets/PortfolioPageAssets/Portfolio5/SWOT-test.png";
import Figure6Image from "../../assets/PortfolioPageAssets/Portfolio5/Frame 13.png";
import Figure7Image from "../../assets/PortfolioPageAssets/Portfolio5/UserJourney.png";
import Figure8Image from "../../assets/PortfolioPageAssets/Portfolio5/Styleguide.png";
import Figure11Image from "../../assets/PortfolioPageAssets/Portfolio5/HiFidelityWireframes-1.png";
import Figure12Image from "../../assets/PortfolioPageAssets/Portfolio5/HiFidelityWireframes-2.png";
import Figure13Image from "../../assets/PortfolioPageAssets/Portfolio5/HiFidelityWireframes-3.png";
import Figure14Image from "../../assets/PortfolioPageAssets/Portfolio5/HiFidelityWireframes-4.png";
import Figure15Image from "../../assets/PortfolioPageAssets/Portfolio5/HiFidelityWireframes-5.png";
import Figure16Image from "../../assets/PortfolioPageAssets/Portfolio5/LowFidelity/LowFidelityWireframes-1.png";
import Figure17Image from "../../assets/PortfolioPageAssets/Portfolio5/LowFidelity/LowFidelityWireframes-2.png";
import Figure18Image from "../../assets/PortfolioPageAssets/Portfolio5/LowFidelity/LowFidelityWireframes-3.png";
import Figure19Image from "../../assets/PortfolioPageAssets/Portfolio5/LowFidelity/LowFidelityWireframes-4.png";
import Figure20Image from "../../assets/PortfolioPageAssets/Portfolio5/LowFidelity/LowFidelityWireframes-5.png";
import Figure21Image from "../../assets/PortfolioPageAssets/Portfolio5/Crazy8.png";
import ParkerImage from "../../assets/PortfolioCardImages/ParkerPreview-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PortfolioPageFigure from "../../components/PortfolioPageFigure";
import FadeIn from "react-fade-in/lib/FadeIn";
import ReactGA from "react-ga4";
import PortfolioPageFigureLong from "../../components/PortfolioPageFigureLong";
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

  indicatorStyles = {
    position: "absolute",
    bottom: "1rem",
    width: "100%",
    textAlign: "center",
  };

  renderCustomIndicator = (onClickHandler, isSelected, index, label) => {
    const indicatorStyle = {
      display: "inline-block",
      width: "8px",
      height: "8px",
      margin: "0 5px",
      borderRadius: "50%",
      background: isSelected ? "#2978b5" : "#ccc",
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

  arrowStyles = {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    width: "2rem",
    height: "2rem",
    cursor: "pointer",
    // borderRadius: "1rem",
    // backgroundColor: "white",
    // border: "0.1rem solid rgb(41 120 181 / 14%)",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // paddingBottom: "0.1rem",
    fontSize: "2rem",
    // color: "#2978b5",
    // // margin: "1rem",
    // boxShadow: "0px 0px 13px 0px rgba(41, 120, 181, 0.08)",
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
          <img
            className="banner-image"
            src={ParkerImage}
            title={"Banner Image"}
            alt={"Banner Image"}
            width="1000"
            height="1000"
          ></img>
          {/* <PortfolioPageFigureLong
                  imageSource={Figure9Image}
                  figureCaption={""}
                  title={"Double diamond diagram showing design process"}
                  singleCard={"single-card"}
                /> */}
          <article className="portfolio-pages h-entry">
            <article>
              <header className="portfolio-header">
                {/* <section className="disclaimer-text">
                  <PriorityHighIcon />
                  <p>
                    As this is an interactive piece, it is highly encouraged
                    that you play the game (or watch the gameplay video) to
                    better understand its design process.
                  </p>
                </section> */}

                {/* <PortfolioPageFigureLong
                  imageSource={Figure9Image}
                  figureCaption={""}
                  title={"Double diamond diagram showing design process"}
                  singleCard={"single-card"}
                /> */}

                <section className="portfolio-page-title-line">
                  <section>
                    <h1 className="portfolio-item-title p-name">Parker</h1>
                    <p className="portfolio-sub-title">
                      An app-based platform that aims to revolutionise on-street
                      parking in South Africa
                    </p>
                  </section>
                  <img className="portfolio-page-icon" src={TestImageOne}></img>
                </section>

                <section className="portfolio-page-info">
                  <section>
                    <h2 className="portfolio-info-title">Role</h2>
                    <p className="portfolio-info-sub-title">
                      Lead UX Designer, Researcher, and Developer
                    </p>
                  </section>
                  <section>
                    <h2 className="portfolio-info-title">Timeframe</h2>
                    <p className="portfolio-info-sub-title">5 Months</p>
                  </section>
                </section>
              </header>

              {/* <Titles
              //   mainTitle={true}
              //   title={BlogList[blogInfoToLoad].cardTitle}
              //   subTitle={true}
              //   blogDate={BlogList[blogInfoToLoad].cardDate}
              //   blogWords={BlogList[blogInfoToLoad].blogWords}
              //   freeArticlesLeft={this.props.freeArticlesLeft}
              /> */}
              <section className="portfolio-page-contents e-content">
                <h2 className="portfolio-page-heading-1">Overview</h2>
                <section className="grid-container">
                  <section className="grid-item">
                    <h3 className="portfolio-page-heading-2">🔍</h3>
                    <h3 className="portfolio-page-heading-2">The Scenario</h3>
                    <p>
                      In South Africa, the experience of on-street parking can
                      turn stressful quickly. Finding an open parking spot seems
                      easy, but returning to your car often involves dealing
                      with informal 'car guards' soliciting money. What should
                      have been a simple process turns into a potentially
                      awkward encounter, disrupting the usual in-and-out
                      routine.
                    </p>
                    {/* Add your other content for the first item here */}
                  </section>

                  <section className="grid-item">
                    <h3 className="portfolio-page-heading-2">⚠️</h3>
                    <h3 className="portfolio-page-heading-2">The Problem</h3>
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
                    {/* Add your other content for the second item here */}
                  </section>

                  <section className="grid-item">
                    <h3 className="portfolio-page-heading-2">💡</h3>
                    <h3 className="portfolio-page-heading-2">The Solution</h3>
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
                    {/* Add your other content for the third item here */}
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
                {/* <p>
                  With an overview of the project, we can then look more closely
                  at the entire process below:
                </p> */}
                <h3 className="portfolio-page-heading-2">🎨 Design Process</h3>
                <p>
                  The project can be divided into{" "}
                  <b className="bio-bold">four main areas</b> based on the
                  double-diamond design process. The following graphic gives an
                  overview of the steps and tasks involved in each one.
                </p>
                <PortfolioPageFigure
                  imageSource={Figure3Image}
                  figureCaption={""}
                  title={"Double diamond diagram showing design process"}
                  singleCard={"single-card"}
                />
                <h3 className="portfolio-page-heading-2">🕵🏼‍♂️ Discover</h3>
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
                    imageSource={Figure4Image}
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
                {/* <h4 className="portfolio-page-heading-3">
                  <b className="bio-bold">Surveys</b>
                </h4> */}
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
                <p className="sub-head-p">
                  Having performed a SWOT (Strengths, Weaknesses, Oppurtunities,
                  Threats) analysis of these competitors, the following
                  information was noted:
                </p>

                <ul className="portfolio-bullet-cont">
                  <li className="portfolio-bullet">
                    None of the existing parking apps or services have gained
                    traction in South Africa.
                  </li>
                  <li className="portfolio-bullet">
                    The primary issue is the added complexity rather than
                    simplification of the parking process.
                  </li>
                  <li className="portfolio-bullet">
                    Although off-street parking solutions like KaChing and Admyt
                    promote 'ticketless entry,' they frequently face issues with
                    malfunctioning AI cameras, forcing users to revert to
                    traditional ticket systems.
                  </li>
                  <li className="portfolio-bullet">
                    ParkFind, designed to modernize parking meters, falls short
                    by transferring existing parking meter complexities, such as
                    choosing parking duration and limited hours, to a mobile
                    application.
                  </li>
                  <li className="portfolio-bullet">
                    Overall, the competitive landscape highlights significant
                    opportunities for innovation and improvement in the
                    on-street parking sector in South Africa.
                  </li>
                </ul>

                <PortfolioPageFigure
                  imageSource={Figure5Image}
                  figureCaption={""}
                  title={
                    "A SWOT diagram of all the parking service competitors in South Africa"
                  }
                  singleCard={"single-card"}
                />
                {/* <iframe
                  className="figma-embed"
                  width="800"
                  height="450"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F62YiZ6s9rk0FROXFZL4VZ9%2FUntitled%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DpUDpcNv2qhAcKNqD-1"
                  allowfullscreen
                /> */}
                <h3 className="portfolio-page-heading-2">🎯 Define</h3>
                <h4 className="portfolio-page-heading-3">Findings</h4>

                <section className="grid-container-findings">
                  <section className="grid-item-findings">
                    <section className="grid-square">
                      {" "}
                      <h3 className="portfolio-page-heading-2">1</h3>
                    </section>
                    <p>
                      Participants expressed increased safety concerns due to
                      unpredictable informal 'car guards’
                    </p>
                    {/* Add your other content for the first item here */}
                  </section>

                  <section className="grid-item-findings">
                    <h3 className="portfolio-page-heading-2">⚠️</h3>
                    <h3 className="portfolio-page-heading-2">The Problem</h3>
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
                    {/* Add your other content for the second item here */}
                  </section>

                  <section className="grid-item-findings">
                    <h3 className="portfolio-page-heading-2">💡</h3>
                    <h3 className="portfolio-page-heading-2">The Solution</h3>
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
                    {/* Add your other content for the third item here */}
                  </section>
                </section>

                <PortfolioPageFigureLong
                  imageSource={Figure6Image}
                  figureCaption={""}
                  title={""}
                  singleCard={"single-card"}
                />
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

                <h3 className="portfolio-page-heading-2">🛠️ Develop</h3>
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
                    imageSource={Figure21Image}
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
                  understand how a user might use it.
                </p>

                <PortfolioPageFigure
                  imageSource={Figure7Image}
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
                  imageSource={Figure8Image}
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
                {/*
                <section className="portfolio-double-figures">
                  <iframe
                    // style="border: 1px solid rgba(0, 0, 0, 0.1);"

                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FltOD8UKv7IThncGx7LzEBH%2FParker-(Client)-Wireframes%3Ftype%3Ddesign%26node-id%3D118%253A10404%26mode%3Ddesign%26t%3D5rcobC87ZrjCVNMU-1"
                    allowfullscreen
                    className="portfolio-figma double"
                  />
                  <iframe
                    // style="border: 1px solid rgba(0, 0, 0, 0.1);"

                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FltOD8UKv7IThncGx7LzEBH%2FParker-(Client)-Wireframes%3Ftype%3Ddesign%26node-id%3D345%253A11956%26mode%3Ddesign%26t%3D5rcobC87ZrjCVNMU-1"
                    allowfullscreen
                    className="portfolio-figma double"
                  />
                </section> */}
                {/*
                <PortfolioPageFigureLong
                  imageSource={Figure11Image}
                  figureCaption={""}
                  title={"Styleguide for Parker"}
                  singleCard={"single-card"}
                /> */}
                {/* <PortfolioPageFigureLong
                  imageSource={Figure12Image}
                  figureCaption={""}
                  title={"Styleguide for Parker"}
                  singleCard={"single-card"}
                /> */}

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
                      imageSource={Figure16Image}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 1</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={Figure17Image}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={Figure18Image}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={Figure19Image}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={Figure20Image}
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
                {/*
                <section className="portfolio-double-figures">
                  <iframe
                    // style="border: 1px solid rgba(0, 0, 0, 0.1);"

                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FltOD8UKv7IThncGx7LzEBH%2FParker-(Client)-Wireframes%3Ftype%3Ddesign%26node-id%3D118%253A10404%26mode%3Ddesign%26t%3D5rcobC87ZrjCVNMU-1"
                    allowfullscreen
                    className="portfolio-figma double"
                  />
                  <iframe
                    // style="border: 1px solid rgba(0, 0, 0, 0.1);"

                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FltOD8UKv7IThncGx7LzEBH%2FParker-(Client)-Wireframes%3Ftype%3Ddesign%26node-id%3D345%253A11956%26mode%3Ddesign%26t%3D5rcobC87ZrjCVNMU-1"
                    allowfullscreen
                    className="portfolio-figma double"
                  />
                </section> */}
                {/*
                <PortfolioPageFigureLong
                  imageSource={Figure11Image}
                  figureCaption={""}
                  title={"Styleguide for Parker"}
                  singleCard={"single-card"}
                /> */}
                {/* <PortfolioPageFigureLong
                  imageSource={Figure12Image}
                  figureCaption={""}
                  title={"Styleguide for Parker"}
                  singleCard={"single-card"}
                /> */}

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
                      imageSource={Figure11Image}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 1</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={Figure12Image}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={Figure13Image}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={Figure14Image}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <PortfolioPageFigureLong
                      imageSource={Figure15Image}
                      figureCaption={""}
                      title={"Styleguide for Parker"}
                      singleCard={"single-card"}
                    />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                </Carousel>

                <h3 className="portfolio-page-heading-2">✅ Deliver</h3>
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
            {/* <BlogReferences
                references={[
                  {
                    referenceStart:
                      "Carrier, D. (2020). 'The Work of Art in the Age of the Internet', ",
                    referenceCite: <cite>Hyperallergic, </cite>,
                    referenceEnd:
                      "Available At: http://hyperallergic.com/563938/the-work-of-art-in-the-age-of-the-internet/ (Accessed: 7 March 2022).",
                  },
                  {
                    referenceStart: "FemmeAndroid (2020). ",
                    referenceCite: <cite>This Website Will Self Destruct. </cite>,
                    referenceEnd:
                      "[Online] Available At: https://www.thiswebsitewillselfdestruct.com",
                  },
                  {
                    referenceStart: "McLuhan, M., Fiore, Q., & Fairey, S. (2001). ",
                    referenceCite: <cite>Medium is the Massage (1st ed.). </cite>,
                    referenceEnd: "Gingko Press.",
                  },
                ]}
              /> */}
            {/* <BlogButtons type="Blog" /> */}
          </article>
        </FadeIn>
      </>
    );
  }
}
