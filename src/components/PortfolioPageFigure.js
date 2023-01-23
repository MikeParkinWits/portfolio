import React, { Component } from "react";

//Image Imports
import TestImage from "../assets/LongPhotoTest.jpg";

export default class PortfolioPageFigure extends Component {
  static defaultProps = {
    imageSource: TestImage,
    title: "This is a missing image",
    imageAlt: "A missing image with squares of different colours",
    figureCaption: "Figure 1: Caption Missing",
  };

  render() {
    const { imageSource, title, imageAlt, figureCaption } = this.props;

    return (
      <>
        <figure className="portfolio-figure">
          <img
            className="portfolio-image u-photo"
            src={imageSource}
            title={title}
            alt={imageAlt}
            width="1000"
            height="1000"
          ></img>
          <figcaption>{figureCaption}</figcaption>
        </figure>
      </>
    );
  }
}
