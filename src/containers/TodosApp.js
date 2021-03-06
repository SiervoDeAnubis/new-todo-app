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
    this.props.onToggleTodoDone({ index, done: event.target.checked });
  }

  handleTodoDelete(index) {
    this.props.onDeleteTodo({ index });
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
        <button onClick={() => this.props.onAllTodosDone()}>All Done</button>
        {todos.length === 0 ? (
          <span>No Items</span>
        ) : (
          <TodoList
            todos={todos}
            handleToggleTodoDone={this.handleToggleTodoDone.bind(this)}
            handleTodoDelete={this.handleTodoDelete.bind(this)}
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
    },
    onToggleTodoDone(toggle) {
      dispatch(actions.toggleTodoDone(toggle));
    },
    onAllTodosDone() {
      dispatch(actions.allTodosDone());
    },
    onDeleteTodo(todos) {
      dispatch(actions.deleteTodo(todos));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosApp);
