import React from 'react';

export default class Todo extends React.Component {

  render() {
    return (
      <>
        <h3>{this.props.task}</h3>
      </>
    )
  }
}