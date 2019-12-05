import React from "react";
import "./Todo.css"

export default class Todo extends React.Component {
  render() {
    const { todo, toggleCompletion } = this.props;
    // console.log(this)
    return (
      <>
        <h3
          className={todo.completed ? "completed" : "notCompleted"}
          onClick={() => toggleCompletion(todo.id)}
          id={todo.id}
        >
          {todo.task}
        </h3>
      </>
    );
  }
}
