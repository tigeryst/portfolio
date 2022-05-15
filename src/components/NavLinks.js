import React from "react";
import { Link } from "react-router-dom";

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
      <li className="nav__item">
        <Link
          key={name}
          to={this.props.links[name]}
          className="nav__link"
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
