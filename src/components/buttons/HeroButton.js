import React, { Component } from "react";
import "../../styles/buttons/heroButton.css";

export default class HeroButton extends Component {
  static defaultProps = {
    buttonText: "Button",
  };

  render() {
    const handleClickScroll = () => {
      const element = document.getElementById("test");
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
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
