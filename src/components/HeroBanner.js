import React, { Component, createRef } from "react";

//Image Imports
import BannerPhoto from "../assets/MeBannerPhoto.jpg";
import Video from "../assets/Memoji.mov";
import Photo from "../assets/Memoji.png";

//Component Imports
import HeroButton from "../components/buttons/HeroButton";
import Linkbutton from "../components/buttons/Linkbutton";

export default class HeroBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lowPowerMode: false,
    };
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    // Try to play the video when the component mounts

    // console.log(this.videoRef);
    this.videoRef.current
      .play()
      .then(() => {})
      .catch((error) => {
        if (error.name === "NotAllowedError") {
          // Low power mode detected
          this.setState({ lowPowerMode: true });
        }
      });
  }

  render() {
    const { lowPowerMode } = this.state;

    return (
      <>
        <section className="homepage-card">
          <section className="homepage-card-info">
            <h1>
              Hi, I'm <span className="hero-name">Michael 👋🏼</span>
            </h1>
            <section className="homepage-card-content">
              <p>A UX Designer,</p>
              <p>Overall Tech Enthusiast,</p>
              <p>
                & Current{" "}
                <b className="bio-bold">MS-HCI Student @ Georgia Tech 🐝</b>
              </p>
            </section>
            <section className="homepage-card-buttons">
              <Linkbutton
                buttonText={"My Portfolio"}
                buttonPath={"/portfolio"}
              />
              <Linkbutton buttonText={"About Me"} buttonPath={"/about_me"} />
            </section>
          </section>

          <section className="homepage-card-image">
            {/* <img src={BannerPhoto} width="1000" height="1000"></img> */}
            {/* <img src={GIF} width="1000" height="1000"></img> */}

            {lowPowerMode ? (
              <img src={Photo} width="800" height="800"></img>
            ) : (
              <video
                ref={this.videoRef}
                width="1000"
                autoPlay
                loop
                playsInline
                muted
              >
                <source src={Video} type="video/mp4" />
              </video>
            )}
          </section>
        </section>
      </>
    );
  }
}
