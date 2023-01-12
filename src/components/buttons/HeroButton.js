import React, { Component } from "react";
import "../../styles/buttons/heroButton.css";

export default class HeroButton extends Component {
  static defaultProps = {
    buttonText: "Button",
    buttonPath: "",
  };

  render() {
    const handleClickScroll = () => {
      const element = document.getElementById("portfolio-section");
      if (element) {
        const headerOffset = 55;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    const { buttonText } = this.props;

    return (
      <>
        <button className="hero-button" onClick={handleClickScroll}>
          {buttonText}
        </button>
      </>
    );
  }
}
