import React from "react";
import Hamburger from "./Hamburger.js";
import NavLinks from "./NavLinks";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.state = {
      isCollapsed: true,
    };

    this.links = {
      Home: "/",
      Projects: "/projects",
      Blogs: "/blogs",
      Interests: "/interests",
    };
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
        className={`navbar ${this.state.isCollapsed ? "" : "nav--open"}`}
      >
        <div className="logo">
          {/* <img src="../images/logo.png" alt="" /> */}
          <i className="fas fa-lg fa-paw"></i>
        </div>
        <Hamburger
          // isCollapsed={this.state.isCollapsed}
          onClick={this.handleHamburgerClick}
        />
        <NavLinks
          // isCollapsed={this.state.isCollapsed}
          links={this.links}
          onClick={this.handleHamburgerClick}
        />
      </header>
    );
  }
}

export default NavBar;
