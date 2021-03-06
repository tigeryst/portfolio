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
          smooth={true}
          delay={0}
          duration={250}
          activeClass="nav__link--active"
          offset={-45}
          onClick={this.handleClick}
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
