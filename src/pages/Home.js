import React, { Component } from "react";

//Style Imports
import "../styles/home.css";

//Component Imports
import HeroBanner from "../components/HeroBanner";

export default class Home extends Component {
  render() {
    return (
      <>
        <HeroBanner />
      </>
    );
  }
}
