import React, { Component } from "react";

export default class TodoForm extends Component {

  render() {
    const { newTodo, addTodo, handleInputChange, clearCompleted } = this.props;

    return (
      <div>
        <form onSubmit={addTodo}>
          <label>
            Add a task
            <input value={newTodo.task} onChange={handleInputChange} />
          </label>{" "}
          <br />
          <button type="submit">Submit</button> <br />
        </form>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    );
  }
} 