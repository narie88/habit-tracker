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
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({
      habits,
    });
  };
  handleDecrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;

    habits[index].count = count < 0 ? 0 : count;
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
      id: 4,
      count: 0,
    };
    this.setState({
      habits: [...this.state.habits, newHabit],
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
        />
      </div>
    );
  }
}

export default App;
