import React, { Component } from "react";
import "../../styles/portfolioPages.css";

//Image Imports
import TestImageOne from "../../assets/PortfolioPageAssets/PortfolioIcons/BraaiSimulatorIcon.png";
import Linkbutton from "../../components/buttons/Linkbutton";
import ExternalLinkbutton from "../../components/buttons/ExternalLinkButton";

import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default class Portfolio1 extends Component {
  //Lifecycle method which scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <article className="portfolio-pages h-entry">
          <article>
            <header className="portfolio-header">
              <section className="portfolio-page-title-line">
                <section>
                  <h1 className="portfolio-item-title p-name">Portfolio 1</h1>
                  <p className="portfolio-sub-title">
                    Created Using React.JS, CSS, & HTML
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
                  buttonText={"GitHub"}
                  buttonIcon={<GitHubIcon />}
                  buttonPath={"https://www.google.com"}
                />
                <ExternalLinkbutton
                  buttonText={"Download"}
                  buttonIcon={<DownloadIcon />}
                />
                <ExternalLinkbutton
                  buttonText={"Video Overview"}
                  buttonIcon={<YouTubeIcon />}
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
              <h2 className="portfolio-page-heading-1">Heading 1</h2>
              <h3 className="portfolio-page-heading-2">Heading 2</h3>
              <h4 className="portfolio-page-heading-3">Heading 3</h4>
              <p>
                Here we explore the design decisions made when creating the
                simulation game – Braai Simulator. To do this, I start by giving
                an overview of the game and its core mechanics; before outlining
                the design goals for the game. Thereafter, I begin looking more
                closely at the process behind the game’s creation, exploring how
                I kept my design goals in mind throughout. Lastly, I then
                conclude by reflecting briefly on the game as a whole.
              </p>
              <h2 className="portfolio-page-heading-1">
                Game Overview & Design Goals
              </h2>
              <p>
                Firstly, before we can look at the design goals for Braai
                Simulator, we must have a clear understanding of the games
                concept. Braai Simulator is a 3D, first-person, life simulation
                game that I created for my 3rd year final university project. We
                were split into random teams of two and tasked with
                conceptualizing and creating a game prototype over the course of
                two months. Throughout this process, I took the position of
                project manager, lead developer, and lead game designer; while
                my partner oversaw all aspects of the game’s visuals.
              </p>
              <p>
                Next, with a basic understanding of the artwork now outlined, we
                can then begin analysing the artwork to further understand its
                importance in relation to more traditional, physical, artworks.
                In their 2020 article
                <cite>The Work of Art in the Age of the Internet</cite>, David
                Carrier (2020) highlights not only the shift away from artworks
                requiring a physical and unique existence in art galleries, but
                also their shift into the digital sphere through the internet.
                However, whilst this allows physical artworks to become more
                accessible, the online version will always be a digital
                reproduction of the original. Thus, unlike these physical
                artworks that are merely reproduced on the internet, net art is
                created with the unique properties of the internet in mind, and
                is not possible without its existence (Carrier, 2020: para. 12 -
                16).
              </p>
              <p>
                In the case of <cite>This Website Will Self Destruct</cite>, it
                requires that multiple users come together to keep the website
                alive, something that would not have been possible on a long
                term basis with a physical artwork – especially as the website
                was created as a space to connect during a global pandemic,
                where users were forced to isolate themselves from one another
                physically. As such, this idea of coming together digitally to
                help keep something alive, in a time of disconnection, death,
                and uncertainty, forms the crux of the artwork and shows the
                true value of net art – as without the internet and its 24/7
                access, this type of artwork would have already self-destructed
                and not been nearly as impactful. However, even when the day
                does come, because of the nature of the internet and its
                reproducibility, the site will always be accessible through
                archive services such as the <cite>Wayback Machine</cite>,
                allowing for much of the same effect as when it was live. All of
                this then reiterates the importance of how, as Marshal McLuhan
                said in his 2001 book <cite>Understanding Media</cite>, the
                medium is the message (McLuhan, 2001) – that is, without the
                medium of the internet, the message of the artwork would not
                have come across in the same way, and nor would it have been as
                impactful.
              </p>
              <p>
                In conclusion, we can then see that through the example of
                <cite>This Website Will Self Destruct</cite>, and its reliance
                on multiple users and the internet, net art is more than just
                traditional art on the internet and is in fact art that relies
                on the unique characteristics of the internet to exist. This
                then results in an exciting new medium for artistic practice to
                take place, where any artist can display impactful new works
                freely to as many people as possible – both now and in the years
                to come.
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
      </>
    );
  }
}
