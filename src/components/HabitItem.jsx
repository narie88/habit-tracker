import React, { Component } from "react";

class HabitItem extends Component {
  render() {
    return (
      <li>
        <span className="habit-name">title</span>
        <span className="habit-count">0</span>
        <button type="button" className="habit-button habit-increase">
          +
        </button>
        <button type="button" className="habit-button habit-decrease">
          -
        </button>
        <button type="button" className="habit-button habit-delete">
          del
        </button>
      </li>
    );
  }
}

export default HabitItem;
