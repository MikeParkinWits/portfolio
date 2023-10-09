import React, { Component } from "react";
import "../../styles/portfolioPages.css";

//Image Imports
import TestImageOne from "../../assets/PortfolioPageAssets/PortfolioIcons/TIKWIcon.svg";
import Figure1Image from "../../assets/PortfolioPageAssets/Portfolio2/Image1.png";
import Figure2Image from "../../assets/PortfolioPageAssets/Portfolio2/Image2.png";

import Linkbutton from "../../components/buttons/Linkbutton";
import ExternalLinkbutton from "../../components/buttons/ExternalLinkButton";

import LanguageIcon from "@mui/icons-material/Language";
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
      title: "Portfolio 2",
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
                    that you engage with it.
                  </p>
                </section>

                <section className="portfolio-page-title-line">
                  <section>
                    <h1 className="portfolio-item-title p-name">
                      The Internet We Know
                    </h1>
                    <p className="portfolio-sub-title">
                      An Internet Artwork Created With React.JS, HTML, & CSS
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
                    buttonText={"View Website"}
                    buttonIcon={<LanguageIcon />}
                    buttonPath={
                      "https://mikeparkinwits.github.io/wsoa4175a_1894979/"
                    }
                  />
                  <ExternalLinkbutton
                    buttonText={"GitHub Repo"}
                    buttonIcon={<GitHubIcon />}
                    buttonPath={
                      "https://github.com/MikeParkinWits/wsoa4175a_1894979"
                    }
                  />
                  {/* <ExternalLinkbutton
                  buttonText={"Overview Video"}
                  buttonIcon={<YouTubeIcon />}
                  buttonPath={"https://www.youtube.com/watch?v=b8WvJDNB2VQ"}
                /> */}
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
                  <cite>The Internet We Know</cite> is an interactive piece of
                  internet art created, during my undergraduate, that critiques
                  the increasingly dark design practices that are present on
                  many modern-day websites, practices that we often ignore as we
                  have become extremely desensitized towards them. To do this, I
                  aimed to create a blog/news website, focusing on issues on the
                  web, which acted as the canvas for my artwork; subverting the
                  users preconceived, desensitized, expectations by taking these
                  bad practices and pushing them to their extreme and mocking
                  them, in an attempt to bring awareness to their true
                  intentions. Below I have outlined the process for how I went
                  about creating this internet artwork, and the reasons behind
                  my decisions.
                </p>

                <h2 className="portfolio-page-heading-1">2. Process</h2>

                <p>
                  First, I began my process by explore various different modern
                  websites in order to understand where to start with my idea;
                  and while I came across multiple different areas that I could
                  have explored, one in particular stood out to me the most, as
                  it is an area that has become normalized but should not be –
                  cookie consent popups. To understand why these should not be
                  normalized, however, we must first understand what cookies
                  are. According to Kaspersky Antivirus, cookies are a small
                  piece of identifying information that is saved to your
                  browser, allowing information to be retained between browsing
                  sessions. While these may be useful, with first party cookies
                  from the website you are visiting being used to keep you
                  logged in and remember your preferences; they are often abused
                  through third party cookies, which are used to track your
                  movement on the web – serving you more accurate, and
                  increasingly creepier, advertisements in addition to unwanted
                  spam. As such, governments around the world have begun
                  implementing laws to combat this – with one of the most
                  prominent being the ePrivacy Directive put in place by the EU
                  in 2002, which requires websites to ask for consent before
                  using cookies. Although, while this may appear to be a good
                  idea on the surface, loose wording, and very little
                  enforcement, has led to it being grossly abused and misused.
                  In the law, it states that the methods for giving information,
                  offering a right to refuse or requesting consent, should be
                  made as user-friendly as possible; however, many websites have
                  taken this liberally, which has resulted in websites making
                  use of dark UI/UX patterns – which Arushi Jaiswal, in their
                  article <cite>Dark patterns in UX</cite>, notes are deceptive
                  UI/UX interactions that are designed to mislead and trick
                  users – to make accepting cookie usage easy, but declining it
                  extremely difficult.
                </p>

                <h3 className="portfolio-page-heading-2">
                  2.1. Dark UI/UX Patterns
                </h3>

                <p>
                  As such, I started by focusing on this idea of using dark
                  UI/UX patterns, alongside satirical phrasing, to bring
                  attention to the abusive nature of cookie consent law. To do
                  this, I began by placing a simple cookie consent banner at the
                  bottom of my website, purposefully adjusting the colours of
                  the buttons for ‘accept all’ and ‘update preferences’ to make
                  users perceive the ‘accept all’ button as the right option –
                  with the accept all button being an extremely bright, and
                  friendly, colour; as opposed to the dull, and slightly opaque,
                  colours of the ‘update preferences’ button. In addition to
                  this, the cookie consent banner also makes use of more
                  satirical, literal, information as to why the website needs
                  you to accept the cookies. This is then juxtaposed next to
                  the, often-vague, information claiming cookies provide an
                  enhanced user experience, with a line struck through the true
                  reason the developers want you to accept their cookies.
                  However, it is important to note that while crossed out text
                  usual signifies text that should not be read, by placing it in
                  a space that seldom has this, it actually stands out more and
                  users are more inclined to engage with it (see figure 1
                  below). Similarly, this same dark UI/UX pattern can also been
                  seen throughout the entire site – with the ‘adjust
                  preferences’ popup making use of the same crossed out text and
                  button colour schemes. In addition to this, I also take it a
                  step further – using an even more abusive, but still legal,
                  dark UI/UX pattern – placing a cookie wall at the front of the
                  website that requires users to disable cookie blockers if
                  enabled (see figure 2 below); as well as encouraging the user
                  to re-evaluate their cookie choices later if they did not
                  accept them all when first updating their cookie preferences.
                  These then act as a physical barrier to the user, putting a
                  major emphasis on how easily these cookie consent popups can
                  be abused, while still technically being legal, and why they
                  should not be normalized.
                </p>

                <section className="portfolio-double-figures">
                  <PortfolioPageFigure
                    imageSource={Figure1Image}
                    figureCaption={
                      "Figure 1: A screenshot of my websites cookie banner"
                    }
                  />
                  <PortfolioPageFigure
                    imageSource={Figure2Image}
                    figureCaption={
                      "Figure 2: A screenshot of my website if cookies are blocked"
                    }
                  />
                </section>

                <h3 className="portfolio-page-heading-2">
                  2.2. Forced Continuity and Action
                </h3>

                <p>
                  Next, I then looked at how I could expand upon these ideas to
                  better reach my desired goal, which led to my next idea –
                  utilizing forced continuity and action. According to Dheeraj
                  Khindri, in their 2021 article{" "}
                  <cite>
                    10 Common Dark Patterns in UX and How to Avoid Them
                  </cite>
                  , forced continuity and action is, for example, when you need
                  to enter your email to continue using a website or an app –
                  such as The New York Times requiring you to login just to read
                  an article. So, while many may be unfamiliar with the term,
                  most have experienced forced action in some shape or form on
                  the internet, becoming desensitized to it as a result.
                  However, when looking more closely at it, the question may
                  arise as to why websites even require you to login if
                  something is free. The answer: while the content is monetarily
                  free, you are paying for it with your personal data, and at
                  the expense of your own privacy – as websites are allowed to
                  do with your data as they please. So, for my internet artwork
                  I decided to create a popup that requires the user to login
                  after they have read just one blog post, acknowledging that
                  they are providing the website with their personal data, with
                  no way to ignore this request – similar to that of The New
                  York Times forced action. However, through the previously
                  mentioned satirical phrasing and extremely abusive appearance,
                  the user is then made more aware of the developer’s true
                  intentions for including this artificial limitation on the
                  website. In addition to this, it is important to note that the
                  login/logout process for the website also makes use of its own
                  deceptive design, the roach motel – which is a process whereby
                  providing information is easy, but relinquishing access to it
                  is difficult. So, while logging in only requires a single
                  button click, logging out presents an additional popup which
                  tries to persuade the user to not log out – utilizing the same
                  button colours and layout as the cookie banner, with the 'no'
                  button appearing as the ‘correct’ option.
                </p>

                <h3 className="portfolio-page-heading-2">
                  2.3. Web Notifications
                </h3>

                <p>
                  Thereafter, I looked to the next normalized aspect of websites
                  that I wanted to shed light on through my internet artwork –
                  web notifications. While their introduction to the web was
                  logical and useful, providing users with relevant information
                  without having to constantly check the site, they quickly
                  began to be misused because of their loose permission
                  principles and ability to draw users attention – such as
                  through advertisements and spam content at any time. As a
                  result, many people accept them assuming they will enhance
                  their experience, unaware of how to block them later once they
                  are no longer beneficial and misused. So, for my website I
                  designed push notifications which are sent frequently while
                  viewing the site, with the goal of distracting users whilst
                  they read blog posts – taking the types of ad and spam that
                  normally get sent through browser notifications, and making
                  them appear more frequently and while being extremely
                  satirical. However, I quickly ran into an issue while creating
                  this aspect of the internet artwork. With notification spam
                  becoming a big issue in recent years, not only do less people
                  accept push notifications; but browsers, and operating
                  systems, have begun giving the user the option to block all
                  notifications system wide. As such, this could make my
                  internet artwork less effective – with no way to alter this
                  from the website. So, to counter this I made it so that if the
                  user has blocked notifications, or does not accept push
                  notifications, an in-browser notification appears to still
                  make the push notification abuse noticeable.
                </p>

                <h3 className="portfolio-page-heading-2">
                  2.4. Confirm Shaming
                </h3>

                <p>
                  Although, while I had intended to stop my net art with those
                  three areas, I soon realized that my net art did not affect
                  the users experience of the entire website – as most of the
                  net art only appeared at the very beginning of a user’s
                  journey on my site. As such, I implemented one final deceptive
                  design, confirm shamming – which is the process of using
                  emotional manipulation to make a user signup for something or
                  provide personal information. In the case of my website,
                  midway through the site the user is prompted to join the
                  websites mailing list. Not only is there an artificial gateway
                  placed on the user’s browsing experience, but by using confirm
                  shaming, the option for no is turned into “no thanks, I don't
                  want to be a front runner in web development” – shaming the
                  user into subscribing to the websites mailing list. However,
                  unlike traditional confirm shaming, on subscribing the user is
                  emailed to inform them about confirm shaming and to teach them
                  about these tactics so that they can be more aware.
                </p>

                <h3 className="portfolio-page-heading-2">2.5. Final Touches</h3>

                <p>
                  Lastly, with all of the features of my internet artwork now in
                  place, I included one simple, yet extremely effective, final
                  piece to it – the ability to toggle the internet artwork on
                  and off using a button in the footer of the website. While
                  this may seem unnecessary to some, granting the user the
                  ability to disable the internet artwork is vital – as it
                  allows the user to experience the website without any
                  distractions, making it clear just how badly deceptive design
                  tactics impact a websites usability and experience.
                  Ultimately, this option then helps to highlight the importance
                  of becoming re-sensitized to these deceptive design principles
                  across the web, and brings us one step closer to outlawing
                  them as a collective.
                </p>

                <h2 className="portfolio-page-heading-1">3. Reflection</h2>

                <p>
                  So, in conclusion, I am happy with the net art that I was able
                  to create, and believe that I was successfully able to achieve
                  my goal of re-sensitizing users to aspects of the web that had
                  become normalized, but should not have been – with every
                  decision made while creating this internet artwork extremely
                  deliberate. However, even though I am happy with how the
                  artwork turned out, and see it as a success, there were still
                  areas where I felt it could have been improved. I found that
                  my implementation of a notification system did not meet my
                  overall expectations and was not as effective as I expected –
                  as it turns out companies have been putting external measures
                  in place to reduce notification spamming. While unfortunate
                  for my internet artwork, it shows how companies are slowly
                  becoming more aware of these deceptive design principles and
                  are trying to stop them, which ultimately aligns with the goal
                  of my internet artwork.
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
