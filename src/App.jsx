import React, { useCallback, useState } from "react";
import "./App.css";
import Habits from "./components/Habits";
import Navi from "./components/Navi";

const App = () => {
  const [habits, setHabits] = useState([
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
  ]);

  const handleIncrease = useCallback((habit) => {
    const newArr = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    setHabits(newArr);
  }, []);
  const handleDecrease = useCallback((habit) => {
    const newArr = habits.map((item) => {
      if (item.id === habit.id && habit.count > 0) {
        return { ...habit, count: habit.count - 1 };
      }
      return item;
    }, []);

    setHabits(newArr);
  });
  const handleDelete = useCallback((habit) => {
    const newArr = habits.filter((item) => item.id !== habit.id);
    setHabits(newArr);
  }, []);
  const onSubmit = useCallback((text) => {
    const newHabit = {
      name: text,
      id: Date.now(),
      count: 0,
    };
    setHabits((habit) => [newHabit, ...habits]);
  }, []);
  const onReset = useCallback(() => {
    const reset = habits.map((item) => {
      if (item.count > 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    setHabits(reset);
  }, []);
  return (
    <div>
      <Navi totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onDelete={handleDelete}
        onSubmit={onSubmit}
        onReset={onReset}
      />
    </div>
  );
};

export default App;
