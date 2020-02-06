import React from "react";

const NewTodoForm = props => {
  return (
    <form onSubmit={props.handleAddNew}>
      <label htmlFor="new-todo">New Todo </label>
      <input
        type="text"
        id="new-todo"
        value={props.newTodo}
        onChange={props.handleNewTodo}
      />
      <button> Add New Todo </button>
    </form>
  );
};

export default NewTodoForm;
