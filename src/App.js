import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const initialTodos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: initialTodos,
    }
  }

  render() {
    const {todos} = this.state;

    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;