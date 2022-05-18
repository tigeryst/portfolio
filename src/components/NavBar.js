import React from "react";
import Hamburger from "./Hamburger.js";
import NavLinks from "./NavLinks";
import { Link } from "react-scroll";

import logoImg from "../images/logo.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isCollapsed: true,
      isScrolled: false,
    };

    this.links = {
      Home: "home",
      Projects: "projects",
      Blogs: "blogs",
      Interests: "interests",
      About: "about",
      Contact: "contact",
    };
  }

  handleScroll(e) {
    if (window.scrollY > 45) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleHamburgerClick() {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  handleLinkClick() {
    this.setState({ isCollapsed: false });
  }

  render() {
    return (
      <header
        className={`navbar ${this.state.isCollapsed ? "" : "nav--open"} ${
          this.state.isScrolled ? "navbar--scrolled" : ""
        }`}
      >
        <Link to="home" className="logo" smooth={true} delay={0} offset={-45}>
          <img src={logoImg} alt="Logo: white TY on a black background" />
        </Link>
        <NavLinks
          // isCollapsed={this.state.isCollapsed}
          links={this.links}
          onClick={this.handleHamburgerClick}
        />
        <Hamburger
          // isCollapsed={this.state.isCollapsed}
          onClick={this.handleHamburgerClick}
        />
      </header>
    );
  }
}

export default NavBar;
