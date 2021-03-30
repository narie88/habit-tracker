import React, { Component } from "react";
import "./App.css";
import HabitForm from "./components/HabitForm";
import Habits from "./components/Habits";
import Navi from "./components/Navi";

class App extends Component {
  state = {
    habits: [
      {
        id: 1,
        name: "1",
        count: 0,
      },
      {
        id: 2,
        name: "2",
        count: 0,
      },
      {
        id: 3,
        name: "3",
        count: 0,
      },
    ],
  };

  handleIncrease = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({
      habits,
    });
  };
  handleDecrease = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id && habit.count > 0) {
        return { ...habit, count: habit.count - 1 };
      }
      return item;
    });

    this.setState({
      habits,
    });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  onSubmit = (text) => {
    const newHabit = {
      name: text,
      id: Date.now(),
      count: 0,
    };
    this.setState({
      habits: [newHabit, ...this.state.habits],
    });
  };
  onReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count > 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({
      habits,
    });
  };
  render() {
    const { habits } = this.state;
    return (
      <div>
        <Navi totalCount={habits.filter((item) => item.count > 0).length} />
        <Habits
          habits={habits}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete}
          onSubmit={this.onSubmit}
          onReset={this.onReset}
        />
      </div>
    );
  }
}

export default App;
