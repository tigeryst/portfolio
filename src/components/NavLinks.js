import React from "react";
import { Link } from "react-scroll";

class NavLinks extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    const navItems = Object.keys(this.props.links).map((name) => (
      <li key={name} className="nav__item">
        <Link
          to={this.props.links[name]}
          className="nav__link"
          onClick={this.handleClick}
          smooth={true}
          delay={0}
          activeClass="nav__link--active"
          spy={true}
          offset={-45}
        >
          {name}
        </Link>
      </li>
    ));

    return (
      <nav className="nav">
        <ul className="nav__list">{navItems}</ul>
      </nav>
    );
  }
}

export default NavLinks;
