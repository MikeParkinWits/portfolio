import React, { Component } from "react";
import "../../styles/portfolioPages.css";

import "../../styles/researchPages.css";

//Image Imports
import TestImageOne from "../../assets/PortfolioPageAssets/PortfolioIcons/SwingIcon.png";
import Figure1Image from "../../assets/PortfolioPageAssets/Portfolio1/Image1.png";
import Figure2Image from "../../assets/PortfolioPageAssets/Portfolio1/Image2.png";
import Figure3Image from "../../assets/PortfolioPageAssets/Portfolio1/Image3.png";
import Figure4Image from "../../assets/PortfolioPageAssets/Portfolio1/Image4.png";

import Linkbutton from "../../components/buttons/Linkbutton";
import ExternalLinkbutton from "../../components/buttons/ExternalLinkButton";

import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

import PortfolioPageFigure from "../../components/PortfolioPageFigure";
import FadeIn from "react-fade-in/lib/FadeIn";

export default class Research2 extends Component {
  //Lifecycle method which scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        {/* <FadeIn transitionDuration={750}> */}
        <article className="portfolio-pages h-entry">
          <article>
            <header className="portfolio-header">
              <section className="portfolio-page-title-line">
                <section>
                  <h1 className="reserach-item-title p-name">
                    How does PowerWash Simulator’s core gameplay loop motivate
                    us in ways that real-life power washing jobs do not?
                  </h1>
                </section>
              </section>
              <section className="portfolio-page-buttons">
                <ExternalLinkbutton
                  buttonText={"Download Paper"}
                  buttonIcon={<DownloadIcon />}
                  buttonPath={
                    "https://drive.google.com/uc?id=1WuZknQ3HsTACVdpGZOLfyjcMVakLqN9I&export=download"
                  }
                  downloadName={"Michael Parkin - Game Design Research Paper"}
                />
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
              <h2 className="portfolio-page-heading-1">Abstract</h2>

              <p>
                Job simulations are a long-established part of the Simulation
                genre of games, catering to an audience of enthusiasts that
                enjoy interacting with accurately simulated versions of their
                interests, such as flying a plane or driving a truck. However,
                an interesting phenomenon occurs when people outside an
                enthusiast realm interact with job simulations, with most
                quickly becoming motivated to keep playing the game – but why?
                Moreover, why are more and more people playing job simulation
                games that simulate seemingly mundane tasks such as cleaning?
                These questions form the basis of my research, as I aim to
                investigate the psychological factors behind how cleaning
                simulations frame mundane tasks in an engaging way, continually
                motivating players – referring specifically to the game{" "}
                <cite>PowerWash Simulator</cite> throughout my paper to
                substantiate my claims.
              </p>
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
        {/* </FadeIn> */}
      </>
    );
  }
}
