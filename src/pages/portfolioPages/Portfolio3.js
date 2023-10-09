import React, { Component } from "react";
import "../../styles/portfolioPages.css";

//Image Imports
import TestImageOne from "../../assets/PortfolioPageAssets/PortfolioIcons/BraaiSimulatorIcon.png";
import Figure1Image from "../../assets/PortfolioPageAssets/Portfolio3/Image1.png";
import Figure2Image from "../../assets/PortfolioPageAssets/Portfolio2/Image2.png";

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

export default class Portfolio1 extends Component {
  //Lifecycle method which scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);

    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Portfolio 3",
    });
  }

  render() {
    return (
      <>
        <FadeIn transitionDuration={750}>
          <article className="portfolio-pages h-entry">
            <article>
              <header className="portfolio-header">
                <section className="disclaimer-text">
                  <PriorityHighIcon />
                  <p>
                    As this is an interactive piece, it is highly encouraged
                    that you play the game (or watch the gameplay video) to
                    better understand its design process.
                  </p>
                </section>

                <section className="portfolio-page-title-line">
                  <section>
                    <h1 className="portfolio-item-title p-name">
                      Braai Simulator
                    </h1>
                    <p className="portfolio-sub-title">
                      An Game Created With Unity & C#
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
                    buttonText={"Download"}
                    buttonIcon={<DownloadIcon />}
                    buttonPath={
                      "https://drive.google.com/uc?id=14PsJ3k0EEGz2UAxKCEu_VQvppzBVewnF&export=download"
                    }
                    downloadName={"Braai Simulator - Michael Parkin"}
                  />
                  <ExternalLinkbutton
                    buttonText={"GitHub Repo"}
                    buttonIcon={<GitHubIcon />}
                    buttonPath={
                      "https://github.com/MikeParkinWits/Braai-Simulator"
                    }
                  />
                  <ExternalLinkbutton
                    buttonText={"Gameplay Video"}
                    buttonIcon={<YouTubeIcon />}
                    buttonPath={"https://www.youtube.com/watch?v=KHRZclEHYNc"}
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
                <h2 className="portfolio-page-heading-1">
                  1. Overview and Intent
                </h2>

                <p>
                  <cite>Braai Simulator</cite> is a 3D, first-person, life
                  simulation game that I created for my 3rd year final
                  university project. We were split into random teams of two and
                  tasked with conceptualizing and creating a game prototype over
                  the course of two months. Throughout this process, I took the
                  position of project manager, lead developer, and lead game
                  designer; while my partner oversaw all aspects of the game’s
                  visuals.
                </p>
                <p>
                  In the game, the player takes on the role of a braai/barbeque
                  host with one goal: keep their hungry guests satisfied all
                  night long. To do this, the player must use the available
                  utensils to pick up food and place it on the braai to cook.
                  When cooked, it must then be plated and taken to their hungry
                  guests. However, the player must be careful not to burn food
                  by cooking it for too long. Doing this risks a guest being
                  served burnt food or not receiving a meal, which ultimately
                  lowers the overall satisfaction of the party. If the night
                  reaches an end, and the guest satisfaction is high enough,
                  then the braai is a success; but if the satisfaction gets too
                  low, then the player loses.
                </p>
                <p>
                  My partner and I decided to explore two genres that we had
                  very little experience in: simulation and first-person games.
                  As such, we defined four design goals for the project, all of
                  which revolved around refining our simulation and first person
                  game design skills. Firstly, we wanted our game to have smooth
                  and intuitive controls. While crucial in every game, we
                  emphasized this feature to try and alleviate simulation
                  sickness, a motion sickness effect I suffer from that makes
                  first-person games extremely challenging to play. Secondly, we
                  wanted the game to have simple and appealing visuals. This
                  would ensure that every aspect of the game was as clear and
                  understandable as possible. Thirdly, we also wanted simple and
                  effective tutorial guidance and feedback design so that the
                  player could easily and intuitively be immersed in the act of
                  braaiing. Lastly, our final design goal was to make sure that
                  players experience a sense of pressure to complete orders.
                  This pressure was created through the micromanagement of the
                  foods being cooked and fulfilling orders efficiently.
                </p>

                <h2 className="portfolio-page-heading-1">2. Process</h2>

                <p>
                  With that, we can then begin to look at the process behind
                  Braai Simulator – using the four design goals as success
                  criteria:
                </p>

                <h3 className="portfolio-page-heading-2">
                  2.1. Smooth, and Intuitive, Controls
                </h3>

                <p>
                  As noted earlier, not only were we inexperienced when it came
                  to developing first person games, but I suffer from simulation
                  sickness and struggle to play first person games all together.
                  Thus, we began development by focusing on creating a smooth
                  first-person character controller – one that was intuitive to
                  use and alleviated simulation sickness as much as possible. To
                  do this, we researched the reasons behind what causes
                  simulation sickness, noting down four main causes – cluttered
                  visuals, wide fields of view, unrealistic movement speeds and
                  inertia, and fast cursor speeds. So, by adjusting these
                  values, where possible, we landed on a character controller
                  that felt smooth and responsive to use for as many players as
                  possible.
                </p>
                <p>
                  With the character controller finished, we then moved on to
                  the main mechanic of the game – picking up utensils and using
                  them to cook food. While we had originally developed this
                  pick-up mechanic as very lose and free, allowing the player to
                  pick up and drop any item at will, early playtests revealed
                  that this was not enjoyable to use as players found it both
                  unrealistic and chaos inducing – as utensils and food could be
                  dropped anywhere, resulting in the player losing them, having
                  to spend time looking for them unnecessarily. As such, it took
                  away from the micromanagement aspect of the game, which forms
                  a crucial part of our design goal on creating a sense of
                  pressure for the player (as discussed in the next section).
                  Thus, we began exploring alternative controls for the pickup
                  mechanic, in the hopes of better aligning with our design
                  goals. First, we considered giving the player a utensil wheel,
                  which would hold all utensils – allowing the player to easily
                  swap between them at a click of a button. However, we quickly
                  realized that having an item that interacts with the game
                  world, but can disappear in an instant, raised several design
                  questions – such as what happens to food being held by
                  utensils when swapping between them; or what happens when
                  picking up plated food in the game world, is it swappable with
                  utensils? Thus, we instead decided to find a middle ground
                  between both approaches – landing on the idea that as opposed
                  to food and utensils being freely placeable, or always on the
                  player; food would only be placeable on clearly marked
                  countertops in the gameworld. This approach then both
                  alleviated the unrealistic methods of the original controls,
                  while simultaneously giving the player a clear view of where
                  their utensils were at all times – aiding the micromanagement
                  aspect of the game.
                </p>

                <h3 className="portfolio-page-heading-2">
                  2.2. A Sense of Pressure to Complete Orders
                </h3>

                <p>
                  Thereafter, we can look at how we implemented the next design
                  goal – a sense of pressure to complete orders. While there are
                  elements that indirectly effect this, which are referenced
                  throughout the rest of this paper, there are also direct items
                  that affect this – mainly in terms of system design and
                  balancing. In the game, there are various elements that have
                  had to be adjusted in order to create a good sense of pressure
                  for the player: the number of meats that can be cooked at
                  once, how quickly guests arrive; how quickly food orders come
                  in, how many plates are available, how quickly meat cooks, how
                  much the satisfaction increases/decreases, and more. However,
                  adjusting these values has been challenging – as every player
                  has a different skillset and level. As such, through the use
                  of extensive playtesting with our target audience – novice to
                  intermediate gamers experiencing the game for the first time –
                  we were then able to adjust the values to create an experience
                  that we believe successfully creates a sense of pressure for
                  completing orders when the player meets our target audience.
                </p>

                <h3 className="portfolio-page-heading-2">
                  2.3. Simple and Effective Tutorialization, UI, and Feedback
                </h3>

                <h4 className="portfolio-page-heading-3">
                  2.3.1. Tutorialization
                </h4>

                <p>
                  Furthermore, we can then begin looking at the how we
                  facilitated our design goal of simple and effective,
                  tutorialization, UI, and feedback – starting by looking at how
                  this design goal has been adjusted in response to playtesting.
                  While originally this design goal revolved around natural, as
                  opposed to simple and effective, tutorialization and UI, where
                  the player naturally discovered the rules; playtesting quickly
                  revealed that this was problematic, as players never fully
                  understood the game – resulting in it conflicting with our
                  design goal of creating a sense of pressure through
                  micromanagement, as this pressure was being undermined by
                  confusion. Thus, it was decided that instead of the design
                  goal revolving around a natural tutorial, it would revolve
                  around a simplistic, and concise, tutorial. As such, when
                  looking at the tutorial that we implemented, we can see that
                  the game only officially starts after it has completed –
                  allowing players to explore all the mechanics fully before
                  they start, giving new players an equal skill level. In
                  addition, this then also made balancing the game much easier,
                  as players are assumed to start at a similar skillset as
                  opposed to an unknown skillset.
                </p>

                <h4 className="portfolio-page-heading-3">
                  2.3.2. User Interface
                </h4>

                <p>
                  Next, we can look at the user interface – starting with the
                  static UI. Looking at the screenshot in figure 1 below, the
                  static, on-screen, UI consists of two elements that stick out
                  – the satisfaction gauge, and the time of day. While the
                  satisfaction gauge could have easily been text, like the time
                  of day, we chose to represent it through the gauge as players
                  did not need to know the exact value of satisfaction, and as
                  such text would have overwhelmed them with unnecessary data.
                  Through the use of a gauge, and colour theory (where red
                  indicates low satisfaction, and green indicates high
                  satisfaction), the player is then still able to understand the
                  overall game satisfaction without actually looking at the UI –
                  allowing the UI to be as unobtrusive as possible, and
                  increasing the micromanagement as the player can focus on more
                  information at once.
                </p>

                <PortfolioPageFigure
                  imageSource={Figure1Image}
                  figureCaption={
                    "Figure 1: Screenshot showcasing the game’s User Interface"
                  }
                  singleCard={"single-card"}
                />

                <p>
                  Additionally, we can then look to the diegetic UI present in
                  the game. While there was always diegetic UI planned,
                  specifically in the form of food orders above guests’ heads,
                  there have been various other additions and changes to the
                  Diegetic UI as a result of playtesting. Although a diegetic
                  clipboard, that the player would pick up like an item, that
                  showed current orders was planned since the beginning of the
                  game, playtesting revealed that this was redundant, as it was
                  easier to look back and see the guests as opposed to dropping
                  a utensil and picking up the clipboard. As such, we decided to
                  make the clipboard static item on the wall, which players can
                  easily see just to the left of the braai – helping them to
                  further optimize their strategy and micromanagement. Although,
                  there are also unplanned diegetic UI elements that greatly
                  added to the game – such as food cooking markers. Through
                  playtesting, we noted that players did not have enough
                  information regarding food cooking times, making micromanaging
                  the food more difficult. As such, diegetic markers were added
                  above the food, displaying a circle timer that indicates the
                  cooking/burning time for each food – changing colour to
                  reflect the cooking state of the food (black for uncooked,
                  yellow for half cooked, green for fully cooked, red for
                  burnt).
                </p>

                <h4 className="portfolio-page-heading-3">
                  2.3.3. Audio & Feedback
                </h4>

                <p>
                  Looking at the audio design of the game, this has also been
                  greatly improved since its original inception. Early playtest
                  results showed that there were multiple areas where players
                  expected audio feedback, which we had not accounted for – such
                  as picking up, stacking, and putting down plates; picking up
                  tools; interacting with guests; cooking food; and more. As
                  such, we incorporated all of this and found it greatly
                  enhanced the gameplay experience.
                </p>

                <p>
                  However, the audio does not stop at just being used for
                  feedback, as diegetic audio has also been implemented.
                  Firstly, there is diegetic background music coming out of the
                  radio in the gazebo. Although, unlike a standard background
                  music track, this track increases in speed as the game
                  progresses – psychologically tricking the players into moving
                  faster and more fluidly. Secondly, diegetic audio feedback was
                  also added to indicate satisfaction levels in addition to the
                  meter. This can be seen through the sound that plays for the
                  guests chatting, which changes to a chatting sound consisting
                  of angry boos whenever satisfaction levels drop too low
                  (halfway through the orange) and change back to the regular
                  chatting sound if the satisfaction level is increased again.
                  This then helps the player become more immersed in the game
                  and feel the sense of pressure from guests to complete orders.
                </p>

                <h2 className="portfolio-page-heading-1">3. Reflection</h2>

                <p>
                  Lastly, we can now reflect on the final game that was created.
                  Overall, through the process that I outlined above, I believe
                  that my partner and I were able to successfully meet the
                  design goals of a first-person game with smooth and intuitive
                  controls; simple and appealing visuals; and a simple and
                  effective tutorial, UI, and feedback. However, while I believe
                  that we reached the goal of creating a sense of pressure for
                  the player through micromanaging, it could be debated that we
                  did not – as we are acutely aware that the balancing of
                  elements could have been refined even further. Nonetheless, I
                  can still take this knowledge forward into all future games,
                  expanding our skillset to include first person, and
                  simulation, games. Not only that, but this game showed the
                  importance of playtesting and balancing values, which is
                  something that will be useful to take forward – even outside
                  of simulation games. However, this game was merely a starting
                  point for a potentially much larger project – where there
                  could be more levels, different locations, and additional food
                  types and preparations to prepare – but because that would
                  require additional balancing, playtesting, and time, we were
                  unable to do that that.
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
