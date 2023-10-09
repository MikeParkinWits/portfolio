import React, { Component } from "react";
import "../../styles/portfolioPages.css";

import "../../styles/researchPages.css";

//Image Imports
import TestImageOne from "../../assets/PortfolioPageAssets/PortfolioIcons/ResearchIcon.png";
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

//Google Analytics Import
import ReactGA from "react-ga4";

export default class Portfolio4 extends Component {
  //Lifecycle method which scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);

    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Portfolio 4",
    });
  }

  render() {
    return (
      <>
        <FadeIn transitionDuration={750}>
          <article className="portfolio-pages h-entry">
            <article>
              <header className="portfolio-header">
                <section className="research-page-title-line">
                  <section>
                    <h1 className="research-item-title p-name">
                      UX & Usability Research Paper
                    </h1>
                    <p className="research-sub-title">
                      Exploring the Usability Design of Applications Created
                      with the Hybrid Development Framework Flutter{" "}
                    </p>
                  </section>
                  <img
                    className="portfolio-page-icon"
                    src={TestImageOne}
                    //   title={imageTitle}
                    //   alt={imageAltText}
                  ></img>
                </section>
                <section className="portfolio-page-buttons">
                  <ExternalLinkbutton
                    buttonText={"Download Paper"}
                    buttonIcon={<DownloadIcon />}
                    buttonPath={
                      "https://drive.google.com/uc?id=1mrB9Zc4XKA8X0eqwLxaLLqRWBqex7LGR&export=download"
                    }
                    downloadName={
                      "Michael Parkin - UI/UX Usability Research Paper"
                    }
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
                  With both the smartphone and mobile application markets having
                  grown substantially over the past few years, there has been a
                  shift in how developers are approaching mobile application
                  creation. This has resulted in the emergence of two dominant
                  development methods – native and hybrid. While there have been
                  a handful of articles and papers published discussing both
                  approaches, most focus solely on the technical and development
                  differences between the two methods. Very few explore the
                  impact these methods have on the applications’ usability and
                  user experience design. This paper then serves to provide
                  further insight into this using a set of heuristic principles
                  to explore the usability design of an application created with
                  the hybrid development framework <cite>Flutter</cite>.
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
        </FadeIn>
      </>
    );
  }
}
