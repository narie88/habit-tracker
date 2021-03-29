import React, { Component } from "react";

class Navi extends Component {
  render() {
    const { totalCount } = this.props;
    return (
      <nav className="navbar">
        <span>Habit Tracker</span>
        <span className="navbar-count">{totalCount}</span>
      </nav>
    );
  }
}

export default Navi;
