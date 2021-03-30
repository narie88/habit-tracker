import React, { PureComponent, createRef } from "react";

class HabitForm extends PureComponent {
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
    if (this.state.text === "") return;
    this.props.onSubmit(this.state.text);
    this.setState({
      text: "",
    });
    // const name = this.inputRef.current.value;
    // name && this.props.onSubmit(name);
    // this.inputRef.current.value = '';
    //this.formRef.current.reset();
  };

  formRef = createRef();
  inputRef = createRef();
  render() {
    const { text } = this.state;
    return (
      <form className="add-form" ref={this.formRef} onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
          onChange={this.onChange}
          value={text}
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    );
  }
}

export default HabitForm;
