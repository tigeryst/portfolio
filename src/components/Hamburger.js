import React from "react";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <button
        className="nav-toggle"
        onClick={this.handleClick}
        aria-label="toggle navigation"
      >
        <span className="hamburger"></span>
      </button>
    );
  }
}

export default Hamburger;
