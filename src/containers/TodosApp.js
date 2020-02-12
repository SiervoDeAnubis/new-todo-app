import React, { Component } from "react";
import NewTodoForm from "../components/NewTodoForm";
import TodoList from "../components/TodoList";
import { connect } from "react-redux";
import { actions } from "../store";

class TodosApp extends Component {
  handleAddNewTodo(event) {
    event.preventDefault();
    this.props.onAddNewTodo({
      title: this.props.newTodo,
      done: false
    });

    this.props.onChangeNewTodo("");
  }

  handleToggleTodoDone(event, index) {
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
    const { message, todos, newTodo, onChangeNewTodo } = this.props;
    return (
      <div className="todos">
        <h1>{message}</h1>
        <NewTodoForm
          newTodo={newTodo}
          handleAddNewTodo={this.handleAddNewTodo.bind(this)}
          handleChangeTodo={onChangeNewTodo}
        />
        <button onClick={() => this.handleToggleTodoDone()}>All Done</button>
        {todos.length === 0 ? (
          <span>No Items</span>
        ) : (
          <TodoList
            todos={todos}
            handleCheck={this.handleCheck.bind(this)}
            handleDeleteTodo={this.handleDeleteTodo.bind(this)}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message,
    newTodo: state.newTodo,
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeNewTodo(newTodo) {
      dispatch(actions.changeNewTodo(newTodo));
    },
    onAddNewTodo(todo) {
      dispatch(actions.addNewTodo(todo));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosApp);
