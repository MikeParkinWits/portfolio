import React, { Component } from "react";
import "../styles/footer.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="main-footer h-card">
          <section className="main-footer-contents">
            <p className="p-name">Michael Parkin</p>
            <p>|</p>
            <time dateTime="2023">2023</time>
          </section>
          <section className="secondary-footer-contents">
            <a
              href="https://www.linkedin.com/in/michael-parkin-a43349169/"
              target={"_blank"}
            >
              <LinkedInIcon />
            </a>
          </section>
        </footer>
      </>
    );
  }
}
