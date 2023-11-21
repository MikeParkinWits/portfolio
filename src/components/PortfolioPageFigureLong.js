import React, { Component } from "react";

//Image Imports
import TestImage from "../assets/LongPhotoTest.jpg";

export default class PortfolioPageFigureLong extends Component {
  static defaultProps = {
    imageSource: TestImage,
    title: "This is a missing image",
    imageAlt: "A missing image with squares of different colours",
    figureCaption: "Figure 1: Caption Missing",
    singleCard: "",
  };

  render() {
    const { imageSource, title, imageAlt, figureCaption, singleCard } =
      this.props;

    return (
      <>
        <figure className={"portfolio-figure-long "}>
          <img
            className="portfolio-image-long u-photo"
            src={imageSource}
            title={title}
            alt={imageAlt}
            width="1000"
            height="1000"
          ></img>
        </figure>
      </>
    );
  }
}
