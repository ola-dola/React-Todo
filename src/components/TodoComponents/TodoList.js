import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    const { todos, toggleCompletion } = this.props;

    return (
      <>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion} />
        ))}
      </>
    );
  }
}
