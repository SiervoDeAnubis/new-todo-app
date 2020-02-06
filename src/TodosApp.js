import React, { Component } from "react";
import NewTodoForm from "./components/NewTodoForm";

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello world!!",
      newTodo: "",
      todos: [
        {
          title: "Learn ES6",
          done: false
        },
        {
          title: "Learn React",
          done: false
        },
        {
          title: "Learn Redux",
          done: false
        },
        {
          title: "Learn Redux Saga",
          done: false
        }
      ]
    };
  }

  handleNewTodo(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  handleAddNew(event) {
    event.preventDefault();
    const todos = [
      ...this.state.todos,
      {
        title: this.state.newTodo,
        done: false
      }
    ];
    this.setState({
      newTodo: "",
      todos
    });
  }

  handleCheck(event, index) {
    const todos = [...this.state.todos];
    todos[index] = { ...todos[index] }; // object.assign
    todos[index].done = event.target.checked;
    this.setState({
      todos
    });
  }

  handleAllDone() {
    const todos = this.state.todos.map(todo => ({ ...todo, done: true }));
    this.setState({
      todos
    });
  }

  handleDeleteTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  render() {
    const { message, todos, newTodo } = this.state;
    return (
      <div className="todos">
        <h1>{message}</h1>
        <NewTodoForm
          newTodo={newTodo}
          handleAddNew={this.handleAddNew.bind(this)}
          handleNewTodo={this.handleNewTodo.bind(this)}
        />
        <button onClick={() => this.handleAllDone()}>All Done</button>
        {todos.length === 0 ? (
          <span>No Items</span>
        ) : (
          <ul>
            {todos.map(({ title, done }, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onChange={event => this.handleCheck(event, index)}
                  checked={done}
                />{" "}
                <span className={done ? "done" : ""}>{title}</span>{" "}
                <button onClick={() => this.handleDeleteTodo(index)}>
                  delete todo
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Todos;
