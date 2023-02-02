import React, { Component } from "react";

//Style Imports
import "../styles/home.css";

//Component Imports
import HeroBanner from "../components/HeroBanner";
import FadeIn from "react-fade-in/lib/FadeIn";

export default class Home extends Component {
  //Lifecycle method that scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        {/* <FadeIn transitionDuration={750}> */}
        <HeroBanner />
        {/* </FadeIn> */}
      </>
    );
  }
}
