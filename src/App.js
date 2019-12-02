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

const initialTodoValues = {
  task: "",
  id: "",
  completed: false
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: initialTodos,
      newTodo: initialTodoValues
    };
  }

  handleInputChange = event => {
    this.setState({
      newTodo: {
        task: event.target.value,
        id: Date.now(),
        completed: false
      }
    });
  };

  addTodo = event => {
    event.preventDefault();

    if (this.state.newTodo.task.length >= 3) {
      this.setState(currentState => ({
        todos: [...currentState.todos, currentState.newTodo],
        newTodo: initialTodoValues
      }));
    } else {
      alert("Please input a new todo");
    }
  };

  toggleCompletion = id => {
    // debugger;
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
    
  };

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <TodoList todos={todos} toggleCompletion={this.toggleCompletion} />

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
