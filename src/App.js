import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

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
      newTodo: {
        task: "",
        id: "",
        completed: false
      }
    };
  }

  handleInputChange = event => {
    this.setState({
      newTodo: {
        task: event.target.value,
        id: Date.now(),
        completed: false
      }
    })
  };

  addTodo = event => {
    event.preventDefault();
    this.setState(currentState => ({
      todos: [...currentState.todos, currentState.newTodo]
    }));
  };

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <TodoList todos={todos} />
        <TodoForm
          newTodo={newTodo}
          handleInputChange={this.handleInputChange}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
