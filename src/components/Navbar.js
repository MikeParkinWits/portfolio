import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logos.png";
import "../styles/navbar.css";

//Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navScroll: "navbar",
      click: false,
    };

    this.closeHamburgerMenu = this.closeHamburgerMenu.bind(this);
    this.hamburgerMenuClick = this.hamburgerMenuClick.bind(this);
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

  closeHamburgerMenu() {
    this.setState({ click: false });
  }

  hamburgerMenuClick() {
    this.setState({ click: !this.state.click });
  }

  render() {
    const { click } = this.state;
    const { closeHamburgerMenu, hamburgerMenuClick, failedResponse } = this;

    return (
      <>
        <header className="header-nav">
          <nav className={this.state.navScroll}>
            <section className="logo">
              <NavLink className="logo" to="/" onClick={closeHamburgerMenu}>
                MP.
                {/* <img
                  src={logo}
                  width="130"
                  alt="The Internet We Know Logo"
                ></img> */}
              </NavLink>
            </section>
            <section className="navigation">
              <ul className={click ? "nav-list active" : "nav-list"}>
                <li>
                  <NavLink
                    className="nav-item"
                    to="/about_me"
                    onClick={closeHamburgerMenu}
                  >
                    about me
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="nav-item"
                    to="/portfolio"
                    onClick={closeHamburgerMenu}
                  >
                    portfolio
                  </NavLink>
                </li>

                <li>
                  <a
                    href="https://mikefparkin.itch.io"
                    target="_blank"
                    className="nav-item"
                    onClick={closeHamburgerMenu}
                  >
                    games ↗
                  </a>
                </li>

                {/* <li>
                  <NavLink className="nav-item" to="/games">
                    games
                  </NavLink>
                </li> */}

                {/* <li>
                  <NavLink className="nav-item" to="/research">
                    research papers
                  </NavLink>
                </li> */}
              </ul>
            </section>

            <section className="hamburger-menu" onClick={hamburgerMenuClick}>
              {click ? (
                <FontAwesomeIcon icon={faXmark} className="menu-icon" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="menu-icon" />
              )}
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
