import React, { Component } from "react";

export default class TodoForm extends Component {

  render() {
    const { newTodo, addTodo, handleInputChange } = this.props;

    return (
      <form onSubmit={addTodo} >
        <label>Add a task
          <input value={newTodo.task} onChange={handleInputChange} />
        </label> <br />
        <button type="submit" >Submit</button>
      </form>
    )
  }
} 