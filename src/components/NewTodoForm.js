import React from "react";

const NewTodoForm = props => {
  return (
    <form onSubmit={props.handleAddNewTodo}>
      <label htmlFor="new-todo">New Todo </label>
      <input
        type="text"
        id="new-todo"
        value={props.newTodo}
        onChange={event => props.handleChangeTodo(event.target.value)}
      />
      <button> Add New Todo </button>
    </form>
  );
};

export default NewTodoForm;
