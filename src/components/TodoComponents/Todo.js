import React from 'react';

export default class Todo extends React.Component {

  render() {
    const {todo} = this.props;

    return (
      <>
        <h3>{todo.task}</h3>
      </>
    )
  }
}