import React, { Component } from "react";
import "../../styles/portfolioPages.css";

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

export default class Portfolio1 extends Component {
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
              <section className="disclaimer-text">
                <PriorityHighIcon />
                <p>
                  As this is an interactive piece, it is highly encouraged that
                  you play the game (or watch the gameplay video) before reading
                  about its design process.
                </p>
              </section>

              <section className="portfolio-page-title-line">
                <section>
                  <h1 className="portfolio-item-title p-name">Swing</h1>
                  <p className="portfolio-sub-title">
                    A Game Created Using Unity & C#
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
                    "https://drive.google.com/uc?id=1PUNop0gQmXL2BzGiiI8P0fgXGGpv0cWh&export=download"
                  }
                  downloadName={"Swing - Michael Parkin"}
                />
                <ExternalLinkbutton
                  buttonText={"GitHub Repo"}
                  buttonIcon={<GitHubIcon />}
                  buttonPath={"https://github.com/MikeParkinWits/Swing"}
                />
                <ExternalLinkbutton
                  buttonText={"Gameplay Video"}
                  buttonIcon={<YouTubeIcon />}
                  buttonPath={"https://www.youtube.com/watch?v=b8WvJDNB2VQ"}
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
                <cite>Swing</cite> is a simple - 2D - arcade game that I created
                in two weeks. While brainstorming ideas for this game, I kept
                coming back to the idea of creating a small game with a simple
                main mechanic that felt extremely satisfying to use and evoked a
                sense of relaxation throughout. In <cite>Swing</cite>, the
                player uses a grappling hook to swing around and traverse an
                infinite game world where they attach to various geometric
                shapes to do so. The player is then encouraged to swing quickly
                and smoothly while simultaneously not colliding into any of the
                shapes to increase their score.
              </p>
              <p>
                To achieve this effect, I set out three design goals, all of
                which aid in creating the aesthetic quality of submission – as
                defined by Hunicke, LeBlanc, and Zubek in their MDA Framework.
                Firstly, I wanted the game to make use of{" "}
                <strong>one simple main mechanic</strong> that could be picked
                up at any time without a huge learning curve. This simplicity
                would then allow for a greater level of refinement to ensure
                that the main mechanic feels smooth and relaxing to use.
                Secondly, I wanted to create a{" "}
                <strong>
                  gameplay loop that allowed for the single mechanic to be fully
                  explored
                </strong>{" "}
                while simultaneously helping create a sense of calmness for the
                player as they traversed the game world. Lastly, I wanted the
                game to be <strong>extremely minimalistic</strong> so that all
                aspects of design and tutorialization would be critically
                analyzed, only displaying necessary elements to enhance the
                gameplay experience.
              </p>

              <h2 className="portfolio-page-heading-1">2. Process</h2>

              <p>
                Although, just because the game is designed to be simple and
                minimalist does not mean the process was simple – in fact, the
                simplicity of the project required that I evaluate each element
                and design choice more critically. As such, we can now look at
                the process behind Swing’s creation – using the three main
                design goals, outlined above, as success criteria:
              </p>

              <h3 className="portfolio-page-heading-2">
                2.1. Simple, Single, Main Mechanic
              </h3>

              <p>
                As stated earlier, my intention was to create a single,
                easy-to-use, main mechanic that felt extremely satisfying to use
                – evoking a sense of relaxation throughout play. While
                brainstorming ideas for this main mechanic, I kept coming back
                to one extremely smooth, and satisfying, mechanic – the web
                swinging ability from <cite>Spiderman</cite> for PS4. As such, I
                thought about ways that I could create a game around this type
                of ability. However, I knew that creating a full 3D game to do
                this would be extremely over scoped for my timeline. As a
                result, I began taking inspiration from other smaller games that
                revolve around smooth feeling mechanics – such as the infinite
                arcade game <cite>One More Line</cite>. This then ultimately led
                to the games main mechanic of a grappling hook, which players
                then use to swing around an infinite gameworld. Importantly
                though, in order to align with my design goals, I needed to make
                sure that the grappling, and swinging felt extremely smooth and
                refined. As such, the grapple was designed to smoothly wrap
                around corners and have ample room to be refined through
                rigorous external playtesting.
              </p>
              <p>
                However, before I could start refining the feel of the mechanic,
                I first needed to decide the most appropriate control scheme for
                it – allowing for the simple mechanic to feel as intuitive to
                use as possible. To do this, I made use of Andrew Dotsenko’s
                2017 blog post <cite>Designing Game Controls</cite> to create
                four different control schemes for the game, each taking into
                account Dotsenko’s three main principles: accessibility, intent
                communication, and expression space. Firstly, there is the{" "}
                <strong>mixed mouse button</strong> control scheme, which
                requires the player to make three movements per one action –
                moving the mouse to select an attach direction, left clicking to
                attach the grapple, and right clicking to detach the grapple.
                Secondly, we have the <string>single mouse button</string>{" "}
                control scheme, which is similar to the previous control scheme
                except the player only uses two separate movements per action –
                using the mouse to select your attach direction, and the left
                mouse button to both attach, by clicking and holding, and
                detach, by letting go. Thirdly, there is the{" "}
                <strong>mouse and keyboard</strong> control scheme, which is
                similar to the previous, except it replaces the left mouse
                button with the spacebar on the keyboard, allowing the right
                hand to act solely as the direction indicator. Lastly, there is{" "}
                <strong>keyboard only</strong> control scheme, which is the
                simplest control scheme and only requires one movement per
                action. Like the previous control scheme, the player still uses
                the space button to attach and detach, but the direction is
                determined by a rotating arrow around the player – with this
                final control scheme intended to test how the game would
                function on mobile.
              </p>
              <p>
                With these control schemes set, I then performed various formal,
                and informal, playtests where the results were unanimous and
                provided a clear favorite. Playtesters preferred the intuitive
                and natural controls of the single mouse button control scheme
                (control scheme two), as it mimicked the action of attaching and
                detaching occurring on screen. This is in contrast to the least
                favorite control scheme, the mixed mouse button control scheme
                (control scheme one), as it required a higher cognitive load and
                was not representative of the mechanics actions on-screen. When
                playtesting, players also noted that they much preferred the
                precision of the control schemes on PC, and so I decided to
                continue development there (as opposed to pursuing a mobile
                game).
              </p>
              <p>
                With the control scheme selected, I then began refining the
                controls of the mechanic itself. Through more informal
                playtesting, I began tweaking various elements – such as the
                amount of pull the grapple had when attaching, how quickly it
                grapples, how quickly it swings, the gravity scale, and more. By
                doing this, I was then able to create a mechanic that felt
                smooth and satisfying to use, giving players adequate control
                over the mechanic, allow them to traverse smoothly throughout
                the gameworld and reach a higher sense of relaxation.
              </p>
              <p>
                With the main mechanic completed to a satisfactory level, I then
                began implementing a secondary mechanic to encourage the player
                to keep moving and swing quickly throughout the level – a high
                score counter. When the player is traversing the gameworld, they
                rack up points relative to their velocity however, when the
                player collides with an object their score would reset. While
                secondary mechanics are never necessary in a game, when
                implemented successfully they can greatly increase the ease of
                gameplay – and through informal playtesting I saw that this
                addition was extremely well received, both helping to give
                players an objective, while still being unobtrusive enough for
                those that just wanted to enjoy the relaxing feel of the game.
              </p>

              <h3 className="portfolio-page-heading-2">
                2.2. Effective Gameplay Loop
              </h3>

              <p>
                With that, we can then start to look at how I implemented my
                second design goal – an effective and engaging gameplay loop. As
                stated earlier, I wanted the world to be infinite to allow the
                player to fully explore the core grappling and swinging
                mechanic, while still allowing for consistent engagement. As
                such, I started to playtest a cursory infinite world to see how
                players traversed it, noticing that players reacted positively
                to successfully performing different stunts. Thus, I then knew
                that there needed to be different ways for players to express
                themselves with the main mechanic. This then led to the creation
                of an infinite world that was seemingly random, but completely
                intentional – using pseudorandom level generation, consisting of
                two different types of predefined templates, to give the player
                different areas to perform stunts and gain points.
              </p>
              <p>
                The first of these templates is the spawn point template, which
                spawn a random selection of the game’s shapes in eight
                pre-defined grid patterns (which can be seen below in figure 1)
                – with each shape spawning in a random rotation on the grid.
                This randomness then ultimately helps to introduce endless
                scenarios for play, while still being controlled through the
                various pre-defined spawn patterns for the objects – making sure
                that the player never gets stuck. Secondly, there are the
                prebuilt area templates, where I created seven specific
                ‘showpiece’ scenarios to allow the player to express themselves
                freely through a pre-defined area (which can be seen below in
                figure 2). These two types of templates then complimented each
                other well, with the prebuilt area templates balancing out the
                randomness of the spawn point templates – allowing for a
                satisfying gameplay experience consisting of smoother, and
                faster, traversal. However, I had to make sure that the starting
                area for the world was always the same – as this allows for a
                consistent, and stable, starting point whenever beginning the
                game.
              </p>

              <section className="portfolio-double-figures">
                <PortfolioPageFigure
                  imageSource={Figure1Image}
                  figureCaption={
                    "Figure 1: An example of one of the eight different spawn point templates available, where the yellow dots indicate the spawn points of objects."
                  }
                />
                <PortfolioPageFigure
                  imageSource={Figure2Image}
                  figureCaption={
                    "Figure 2: An example of one of the different prebuilt are templates available"
                  }
                />
              </section>

              <p>
                Thereafter, I looked at how to spawn these different templates
                throughout play. It was extremely important to me that when
                generating these templates, they do two things: spawn out of
                sight from the player, as not to break the players submission to
                the game; and delete themselves once they are no longer
                necessary, so that the game can run infinitely without any
                system bottleneck from unnecessary objects. However, during
                playtesting I also realized that I needed to further adjust, and
                balance, how these templates spawn. Initially, all the templates
                had an equal chance of spawning, but I soon noticed that while
                players enjoyed all the template designs, certain templates
                appearing too often was frustrating for the player. As such, I
                balanced the spawn rate of different templates – spawning the
                templates that players enjoyed the most more often.
              </p>

              <h3 className="portfolio-page-heading-2">2.3. Minimalism</h3>

              <p>
                Lastly, we then reach the final design goal for the game –
                minimalism. Although minimalism was only a minor design goal, it
                was still something I considered extremely seriously throughout
                the project. However, minimalism is an extremely broad term and
                as such I broke it down into three parts: visual, audio, and
                user interface.
              </p>

              <h4 className="portfolio-page-heading-3">2.3.1. Visuals</h4>

              <p>
                When it comes to the visuals, I had tested various designs. As
                creating a smooth gameplay experience was important to me, I
                initially created grey level objects that were rounded and
                allowed for the player to smoothly wrap around them when
                swinging. However, I soon noticed that this confused players,
                especially when moving at high speeds, as the shapes blurred
                into each other and had no discernible attach points – taking
                away from both the games design goals and the player experience.
                Thus, I decided to make the level objects both more colourful,
                to help them stand out against the white background; and some
                sharper, to differentiate them from the round player – creating
                a good visual hierarchy for the player, while also providing a
                smoother world traversal. Although, instead of merely assigning
                random colours or a single colour palette for all the objects, I
                decided to implement a rotating collection of different colour
                palettes for objects, with the goal of creating engaging visuals
                that add to the replayability and endless nature of the game (as
                seen in figures 3 and 4 below).
              </p>

              <section className="portfolio-double-figures">
                <PortfolioPageFigure
                  imageSource={Figure3Image}
                  figureCaption={
                    "Figure 3: An example of the red colour scheme in the game"
                  }
                />
                <PortfolioPageFigure
                  imageSource={Figure4Image}
                  figureCaption={
                    "Figure 4: An example of the blue colour scheme in the game"
                  }
                />
              </section>

              <p>
                However, just because I was aiming for minimalism did not mean I
                sacrificed functionality and communication design as a result.
                As such, there were two areas where I implemented additional
                layered visual feedback. Firstly, I added a trail renderer to
                the ball that appears when the player swings, as I found that
                this helps to better convey the speed, and direction, of the
                player while simultaneously being more visually pleasing.
                Secondly, I found that during playtesting players failed to
                understand that their current scores reset when hitting objects,
                and believed that they were just being reset at random. As such,
                I implemented a further layer of communication design to
                indicate to the player that colliding into objects causes the
                reset.
              </p>

              <h4 className="portfolio-page-heading-3">2.3.2. Audio</h4>

              <p>
                Next, we can look at the audio design of Swing which, while
                simple, were completely thought out. As I wanted the game to be
                relaxing and satisfying, I made sure that only necessary and
                useful audio effects were added, so not to distract the player
                during gameplay. This resulted in sound effects only being found
                in three places: when attaching the grapple hook, colliding with
                an object, and breaking your high score. On top of this, I also
                decided to implement soothing background music to add to my goal
                of making the game relaxing. Although, I understood that to
                increase relaxation players may want to listen to their own
                music while playing and as such, I also gave the player the
                option of muting this background music while still receiving
                audio feedback for actions.
              </p>

              <h4 className="portfolio-page-heading-3">2.3.3. Interface</h4>

              <p>
                However, the minimalist design does not stop at audio and
                visuals, as I carried it forward to the user interface – as I
                did not want it taking away from the overall gameplay
                experience. As such, I only displayed the most necessary UI
                elements, placing them in places that were both familiar and
                unobtrusive – with the pause and restart button on the top
                right, and the player’s score information on top left. By only
                utilizing the corners of the screen I was then able to take up
                as little space, and cognitive load, as possible. Furthering
                this, I also made sure that the pause menu was as simple as
                possible, using symbols instead of words as they are more
                readable at a glance. However, I found that when players left
                the pause menu it would be extremely jarring to be thrown right
                back into the game directly, sometimes causing them to lose
                their current score as a result. As such, I implemented a short
                three second count down timer to allow the player to see where
                they are placed before they start swinging again.
              </p>

              <p>
                Furthermore, although the games single mechanic is designed to
                be simple and intuitive to use, I felt it was still necessary to
                add some sort of tutorialization to teach the player how to
                play, in case they do not figure it out on their own. Thus, I
                added an element within the game at the very start which plays a
                basic animation on screen, indicating that pressing the left
                mouse button will let them attach to objects.
              </p>

              <h2 className="portfolio-page-heading-1">3. Reflection</h2>

              <p>
                Lastly, we can now reflect on the final game prototype that I
                created. Overall, through the process that I have outlined
                above, I believe that I was able to successfully meet the intent
                and design goals of a simple game that uses a refined single
                mechanic, engrossing gameplay, and sense of minimalism to create
                the core aesthetic quality of submission and relaxation
                throughout gameplay. Through this process I then ultimately
                learnt that even a simple mechanic, such as grappling and
                swinging, should be playtested thoroughly in order to have a
                refined gameplay experience – which shows how every aspect of
                future games should be playtested, and refined, thoroughly.
              </p>
              <p>
                However, as much as I believe that I did successfully meet my
                design goals, I understand that there are places that I could
                improve for future. While I believe that the games main mechanic
                did feel extremely smooth and satisfying to use, I know that
                with more time and playtesting I could have refined it even
                further. Not only that, but I would have also liked to perform
                more playtests on the procedural level generation, testing the
                different templates I created as to prevent any unforeseen
                situations – as I know that there were a multitude of situations
                which could still arise. Lastly, there were various features
                that I had planned to implement, but ended up abandoning because
                of both time, and straying too far from the games original
                design goals and intent. An example of this is a currency
                system, where coins are scattered around the game world in
                tricky spots, requiring more proficiency of the main mechanic to
                acquire. Players could then use these coins to purchase
                mechanical modifications, such as speed changes and grappling
                adjustments. While I felt that implementing this feature would
                add to the arcade aspect of the game, I realized that it would
                detract from the submission aesthetic, and therefore chose to
                not implement it in the final prototype as it did not align
                fully with my design goals.
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
