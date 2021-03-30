import React from "react";

const HabitItem = ({ habit, onIncrease, onDecrease, onDelete }) => {
  return (
    <li className="habit">
      <span className="habit-name">{habit.name}</span>
      <span className="habit-count">{habit.count}</span>
      <button
        type="button"
        className="habit-button habit-increase"
        onClick={() => onIncrease(habit)}
      >
        +
      </button>
      <button
        type="button"
        className="habit-button habit-decrease"
        onClick={() => onDecrease(habit)}
      >
        -
      </button>
      <button
        type="button"
        className="habit-button habit-delete"
        onClick={() => onDelete(habit)}
      >
        del
      </button>
    </li>
  );
};

export default HabitItem;
