import React, { Component, memo } from "react";

class HabitItem extends Component {
  /* 
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }


  handleIncrease() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  handleDecrease() {
    const count = this.state.count;

    this.setState((state) => ({ count: count > 0 ? state.count - 1 : 0 }));
  }
 
  handleIncrease = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };
  handleDecrease = () => {
    this.setState((state) => {
      return { count: state.count - 1 };
    });
  }
  */

  handleIncrease = (e) => {
    this.props.onIncrease(this.props.habit);
  };
  handleDecrease = () => {
    this.props.onDecrease(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          type="button"
          className="habit-button habit-increase"
          onClick={this.handleIncrease}
        >
          +
        </button>
        <button
          type="button"
          className="habit-button habit-decrease"
          onClick={this.handleDecrease}
        >
          -
        </button>
        <button
          type="button"
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          del
        </button>
      </li>
    );
  }
}
export default memo(HabitItem);
