import React, { Component } from "react";

class HabitForm extends Component {
  state = {
    text: "",
  };
  onChange = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({
      text: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="add-input"
          placeholder="Habit"
          onChange={this.onChange}
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    );
  }
}

export default HabitForm;
