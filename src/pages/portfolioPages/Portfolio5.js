import React, { Component } from "react";
import "../../styles/portfolioPages.css";

//Image Imports
import TestImageOne from "../../assets/PortfolioPageAssets/PortfolioIcons/ParkerIcon.png";
import Figure1Image from "../../assets/PortfolioPageAssets/Portfolio3/Image1.png";
import Figure2Image from "../../assets/PortfolioPageAssets/Portfolio2/Image2.png";
import Figure3Image from "../../assets/PortfolioPageAssets/Portfolio5/DoubleDiamond-test.png";
import Figure4Image from "../../assets/PortfolioPageAssets/Portfolio5/StakeholderDiagram-test.png";
import Figure5Image from "../../assets/PortfolioPageAssets/Portfolio5/SWOT-test.png";
import Figure6Image from "../../assets/PortfolioPageAssets/Portfolio5/Test.png";
import Figure7Image from "../../assets/PortfolioPageAssets/Portfolio5/UserJourney.png";
import Figure8Image from "../../assets/PortfolioPageAssets/Portfolio5/Styleguide.png";

import Linkbutton from "../../components/buttons/Linkbutton";
import ExternalLinkbutton from "../../components/buttons/ExternalLinkButton";

import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

import PortfolioPageFigure from "../../components/PortfolioPageFigure";
import FadeIn from "react-fade-in/lib/FadeIn";

//Google Analytics Import
import ReactGA from "react-ga4";
import PortfolioPageFigureLong from "../../components/PortfolioPageFigureLong";

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

  render() {
    return (
      <>
        <FadeIn transitionDuration={750}>
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
                    src={TestImageOne}
                    //   title={imageTitle}
                    //   alt={imageAltText}
                  ></img>
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
                <h3 className="portfolio-page-heading-2">🔍 The Scenario</h3>
                <p>
                  In South Africa, the experience of on-street parking can turn
                  stressful quickly. Finding an open parking spot seems easy,
                  but returning to your car often involves dealing with informal
                  'car guards' soliciting money. What should have been a simple
                  process turns into a potentially awkward encounter, disrupting
                  the usual in-and-out routine.
                </p>
                <h3 className="portfolio-page-heading-2">⚠️ The Problem</h3>
                <p className="problem-text">
                  {/* <b className="bio-bold"> */}
                  <b>
                    How can we improve the overall on-street parking experience
                    in South Africa, making it a more seamless and safer
                    environment for everyone involved?
                  </b>
                  {/* </b> */}
                </p>
                <p>
                  Self-proclaimed 'car guards' in South Africa are generally
                  unreliable, often intoxicated, and provide minimal protection
                  against theft. Their presence can create unsafe situations,
                  particularly for solo female drivers at night, raising
                  concerns about confronting strangers and the reliability of
                  these guards. It is a problem unique to South Africa, and as
                  such one unexplored.
                </p>
                <h3 className="portfolio-page-heading-2">💡 The Solution</h3>
                <p>
                  After multiple iterations and user testing sessions, the idea
                  of creating an <b className="bio-bold">app-based platform</b>,
                  for mobile devices, that{" "}
                  <b className="bio-bold">
                    connects drivers directly to on-street parking guards
                  </b>{" "}
                  was chosen. This ultimately makes the process of on-street
                  parking in South Africa much more convenient and safer for
                  everyone.
                </p>
                <h3 className="portfolio-page-heading-2">🎥 Demo Video</h3>
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
                <p className="sub-head-p">
                  Firstly, including all possible stakeholders in the design
                  process is essential to create the best suitable design for
                  all party's involved. As such, below is an illustrated account
                  of all the stakeholders and their relationship to one another.
                  In this case, there are two main stakeholders:{" "}
                  <b className="bio-bold">drivers</b>, who are the primary
                  target user of the app, seeking a safer and more convenient
                  on-street parking experience; and{" "}
                  <b className="bio-bold">on-street parking guards</b>, those
                  who use the app to connect with drivers, providing their
                  services and receiving compensation in a more organized and
                  transparent manner.
                </p>
                <PortfolioPageFigure
                  imageSource={Figure4Image}
                  figureCaption={""}
                  title={
                    "Stakeholder diagram showing the primary, secondary, and tertiary stakeholders"
                  }
                  singleCard={"single-card"}
                />
                <h4 className="portfolio-page-heading-3">
                  User Needs Research
                </h4>
                <p className="sub-head-p">
                  To better understand how to improve the on-street parking
                  experience in South Africa, I conducted a comprehensive user
                  research employing both <b className="bio-bold">surveys</b>{" "}
                  and <b className="bio-bold">semi-structured interviews</b>.
                  The primary objective with this was to better understand the
                  unique challenges faced by drivers in South Africa.
                </p>
                {/* <h4 className="portfolio-page-heading-3">
                  <b className="bio-bold">Surveys</b>
                </h4> */}
                <p className="sub-head-p">
                  I started the user research with{" "}
                  <b className="bio-bold">surveys</b> aimed at capturing a broad
                  understanding of the prevailing issues with on-street parking
                  in South Africa. To do this, I was able to reach 42
                  participants from diverse backgrounds and regions within South
                  Africa, with the goal of understanding the frequency and
                  nature of interactions with informal 'car guards.' Key survey
                  questions explored the perceived safety concerns, reliability
                  of these guards, and the impact on the overall parking
                  experience. The responses were analyzed and findings are
                  discussed further down in the findings section.
                </p>
                {/* <h4 className="portfolio-page-heading-3">
                  <b className="bio-bold">Interviews</b>
                </h4> */}
                <p className="sub-head-p">
                  Next, recognizing the limitations of surveys in capturing
                  nuanced experiences and sentiments, I conducted a number of{" "}
                  <b className="bio-bold">
                    in-depth semi-strcutured interviews
                  </b>{" "}
                  to delve deeper into the qualitative aspects of the on-street
                  parking scenario. Through this, I engaged with a group of 4
                  participants, including frequent drivers and female drivers
                  who often travel alone at night. The interviews unveiled a
                  series of emotional and experiential dimensions of the
                  problem, which I go into more depth in my findings section
                  later.
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
                  Threats) analysis of these competitors, it can be noted that
                  none of these apps or services have take off in South Africa.
                  This can mainly be attributed to one problem: they add an
                  extra step of complexity to the parking process, as opposed to
                  simplifying it. All of the currently available solutions try
                  to provide a solution to a problem that never really existed.
                  For example, with off-street parking KaChing & Admyt both
                  advertise ‘ticketless entry’ at parking bays - where instead
                  of taking a ticket the service uses AI cameras to admit you
                  upon approaching the parking lot. However, these cameras are
                  often broken, requiring the driver to take a ticket
                  nonetheless - adding another thing for the driver to worry
                  about. With the on-street parking app ParkFind, it has some
                  major flaws. Instead of trying to revolutionise on-street
                  parking, its actual goal was merely to modernise parking
                  meters. As such, it takes all the headaches that parking
                  meters present — having to pre-emptively choose your parking
                  duration, limited parking hours, and pre-existing equipment
                  required — and links that to a mobile application. Thus,
                  through a competitive analysis we can see that there is still
                  a large amount of room to grow and explore.
                </p>
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
                <p className="sub-head-p">
                  Based on the research and design requirements listed, I then
                  performed a brainstorming session on FigJam to develop
                  potential solutions to this problem - which can be seen below.
                  Thereafter, I went through each idea and tried to combine, and
                  filter them into the best ones. From this, I then ultimately
                  landed on the idea of{" "}
                  <b className="bio-bold">
                    creating a SaaS application that connects drivers to
                    verified on-street car guards.
                  </b>
                </p>
                <iframe
                  // style="border: 1px solid rgba(0, 0, 0, 0.1);"
                  width="800"
                  height="650"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxkgKGLBPjnOdr1ZN3wh6y0%2FBrainstorm-crazy-8s-(Community)%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DbgV1pamu5fdx1iQP-1"
                  allowfullscreen
                  className="portfolio-figma"
                />

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
                  Wireframes & Prototype
                </h4>

                <p className="sub-head-p">
                  Using Figma, I then developed a series of low-fidelity
                  wireframes for the driver application. It is important to note
                  that like other SaaS applications, Parker requires a customer
                  (the driver) and provider (the car guard) applications, but{" "}
                  <b className="bio-bold">
                    for the sake of scope this project focuses solely on the
                    customer side.
                  </b>
                  I then used these low-fidelity wireframes, along with feedback
                  sessions to develop a set of high-fidelity wireframes.
                  Thereafter, Swift & SwiftUI were used to turn those
                  high-fidelity wireframes into a working prototype, which was
                  seen working in the video earlier. These can be seen alongside
                  each other in an interactable Figma window below.
                </p>

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
                </section>

                <h3 className="portfolio-page-heading-2">✅ Deliver</h3>
                <h4 className="portfolio-page-heading-3">User Testing</h4>

                <p className="sub-head-p">
                  In a discounted evaluation, I made use of{" "}
                  <b className="bio-bold">task-based testing</b>, alongside a{" "}
                  <b className="bio-bold">semi-structured interview</b> to test
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
                  am happy with the solution the implementation I came up with,
                  during final user testing there were a handful of suggestions
                  given for further improvement. These include:
                </p>

                <ul className="portfolio-bullet-cont">
                  <li className="portfolio-bullet">
                    <b className="bio-bold">
                      Diversify User Testing Demographics:
                    </b>{" "}
                    While the discounted evaluation provides valuable feedback,
                    consider expanding the user testing pool to include a more
                    diverse demographic, ensuring a broader representation of
                    potential users. This could uncover additional insights and
                    perspectives that may influence the final design.
                  </li>
                  <li className="portfolio-bullet">
                    <b className="bio-bold">Improve Visual Design Language:</b>{" "}
                    While users noted the app was easy to use and presented a
                    minimalist aesthetic, they advised designing a visual design
                    language that was more unique and had its own brand
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
