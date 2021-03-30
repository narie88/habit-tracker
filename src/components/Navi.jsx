import React from "react";

const Navi = ({ totalCount }) => {
  return (
    <nav className="navbar">
      <span>Habit Tracker</span>
      <span className="navbar-count">{totalCount}</span>
    </nav>
  );
};

export default Navi;
