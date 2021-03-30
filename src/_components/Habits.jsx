import React, { Component, memo } from "react";
import HabitForm from "./HabitForm";
import HabitItem from "./HabitItem";

class Habits extends Component {
  render() {
    const {
      habits,
      onIncrease,
      onDecrease,
      onDelete,
      onSubmit,
      onReset,
    } = this.props;
    return (
      <div>
        <HabitForm onSubmit={onSubmit} />
        {habits && (
          <ul>
            {habits.map((habit) => (
              <HabitItem
                habit={habit}
                key={habit.id}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onDelete={onDelete}
              />
            ))}
          </ul>
        )}
        <button className="habits-reset" onClick={onReset}>
          Reset All
        </button>
      </div>
    );
  }
}
export default memo(Habits);
