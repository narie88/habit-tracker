import React, { useState } from "react";

const HabitForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-input"
        placeholder="Habit"
        onChange={onChange}
        value={text}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default HabitForm;
