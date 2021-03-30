import React from "react";
import HabitForm from "./HabitForm";
import HabitItem from "./HabitItem";

const Habits = ({
  habits,
  onIncrease,
  onDecrease,
  onDelete,
  onSubmit,
  onReset,
}) => {
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
};

export default Habits;
