import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logos.png";
import "../styles/navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navScroll: "navbar",
    };
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 0) {
      this.setState({ navScroll: "navbar scroll" });
    } else {
      this.setState({ navScroll: "navbar" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <>
        <header className="header-nav">
          <nav className={this.state.navScroll}>
            <section className="logo">
              <NavLink className="logo" to="/">
                MP.
                {/* <img
                  src={logo}
                  width="130"
                  alt="The Internet We Know Logo"
                ></img> */}
              </NavLink>
            </section>
            <section className="navigation">
              <ul className="nav-list">
                <li>
                  <NavLink className="nav-item" to="/about_me">
                    about me
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-item" to="/portfolio">
                    portfolio
                  </NavLink>
                </li>
              </ul>
            </section>
          </nav>
        </header>
      </>
    );
  }
}

{
  /* <header className="header-nav">
<nav className="navbar">
  <section className="logo">
    <NavLink className="logo" to="/portfolio/">
      <img src={logo} width="130" alt="The Internet We Know Logo"></img>
    </NavLink>
  </section>
  <section className="navigation">
    <ul className="nav-list">
      <li>
        <NavLink className="nav-item" to="/portfolio/about_me">
          About Me
        </NavLink>
      </li>

      <li>
        <NavLink className="nav-item" to="/portfolio/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  </section>
</nav>
</header> */
}
